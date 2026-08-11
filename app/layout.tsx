import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";

export const metadata: Metadata = {
  title: "Maor Idi | DevOps Engineer",
  description:
    "Maor Idi — DevOps & Platform Engineer. Linux, Docker, Kubernetes, Terraform, CI/CD, and Python automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
