import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ananya Jaiswal | Computer Science Student & Developer",
  description:
    "Portfolio of Ananya Jaiswal — a Computer Science student and Developer specializing in building innovative web solutions and mastering data structures.",
  openGraph: {
    title: "Ananya Jaiswal | Computer Science Student & Developer",
    description:
      "Hi, I'm Ananya Jaiswal — a Computer Science student with a passion for building scalable web applications and solving complex algorithmic challenges.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
