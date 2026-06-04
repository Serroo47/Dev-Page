import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serhat Alptekin | Developer",
  description:
    "Persönliche Developer-Website von Serhat Alptekin, angehender Fachinformatiker für Anwendungsentwicklung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}