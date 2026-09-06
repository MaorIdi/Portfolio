import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";

export const metadata: Metadata = {
  title: "Maor Idi | DevOps & Automation Engineer",
  description:
    "Maor Idi — DevOps & Automation Engineer. CI/CD pipelines, cloud infrastructure, Linux, Docker, Kubernetes, Terraform, and Python automation.",
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
