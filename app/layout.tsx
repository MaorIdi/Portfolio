import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maor Idi | Portfolio",
  description: "Maor Idi business protfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
