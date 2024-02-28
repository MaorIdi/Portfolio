import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

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
      <body>
        {/* <Navbar></Navbar> */}
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
