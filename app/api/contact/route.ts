import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ContactEmail } from "@/components/emails/ContactEmail";
import { contactFormSchema } from "@/lib/types";

export async function POST(request: Request) {
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!process.env.RESEND_API_KEY || !fromEmail || !toEmail) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY, RESEND_FROM_EMAIL, or CONTACT_TO_EMAIL",
    );
    return NextResponse.json(
      { error: "Contact form is not available right now. Please try again later." },
      { status: 503 },
    );
  }

  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, helpType, message } = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${name} — Denkore Group`,
      react: ContactEmail({ name, email, helpType, message }),
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
