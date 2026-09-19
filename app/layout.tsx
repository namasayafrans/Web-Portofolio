import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frans Putra Sinaga — IT Infrastructure Professional",
  description:
    "Portfolio profesional Frans Putra Sinaga — IT Infrastructure, Network Engineer, System Administrator, dan IT Support.",
  keywords: [
    "Frans Putra Sinaga",
    "IT Infrastructure",
    "Network Engineer",
    "System Administrator",
    "IT Support",
    "Mikrotik",
    "Teknik Informatika",
  ],
  authors: [{ name: "Frans Putra Sinaga" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
