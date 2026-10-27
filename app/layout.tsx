import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";

export const metadata: Metadata = {
  title: "Maor Idi | Software & DevOps Engineer",
  description:
    "Maor Idi — Software & DevOps Engineer. Python automation, Linux and Windows administration, Kubernetes, Argo CD, GitHub Actions, Docker, Terraform, and AWS.",
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
