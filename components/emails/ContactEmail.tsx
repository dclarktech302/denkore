import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "react-email";

import { HELP_TYPES, type ContactFormData } from "@/lib/types";

export function ContactEmail({ name, email, helpType, message }: ContactFormData) {
  const helpLabel =
    HELP_TYPES.find((option) => option.value === helpType)?.label ?? helpType;

  return (
    <Html>
      <Head />
      <Preview>New inquiry from {name} — Denkore Group</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New website inquiry</Heading>
          <Text style={text}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={text}>
            <strong>Help with:</strong> {helpLabel}
          </Text>
          <Hr style={hr} />
          <Text style={text}>{message}</Text>
          <Hr style={hr} />
          <Text style={footer}>Sent from the contact form at denkoregroup.com</Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactEmail;

const main = {
  backgroundColor: "#050505",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "32px 24px",
  maxWidth: "560px",
};

const heading = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 500,
  marginBottom: "20px",
};

const text = {
  color: "#e5e5e5",
  fontSize: "14px",
  lineHeight: "1.7",
};

const hr = {
  borderColor: "rgba(255,255,255,0.12)",
  margin: "20px 0",
};

const footer = {
  color: "rgba(255,255,255,0.4)",
  fontSize: "12px",
};
