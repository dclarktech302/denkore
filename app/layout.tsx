import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ParticleField } from "@/components/canvas/ParticleField";
import { NebulaBlobs } from "@/components/canvas/NebulaBlobs";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Denkore Group — Tech That's Not Confusing",
  description:
    "Enterprise-grade infrastructure, delivered like a conversation — not a contract. Denkore Group builds web and digital infrastructure for Eastern Shore businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background font-sans text-foreground">
        <ParticleField />
        <NebulaBlobs />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
