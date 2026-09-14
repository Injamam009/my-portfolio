import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheikh Injamamul Haque | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Java, Spring Boot, React, Next.js, AI-powered applications, and scalable web solutions.",

  keywords: [
    "Sheikh Injamamul Haque",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],

  authors: [{ name: "Sheikh Injamamul Haque" }],

  creator: "Sheikh Injamamul Haque",

  openGraph: {
    title: "Sheikh Injamamul Haque",
    description:
      "Full Stack Developer building modern web applications and AI-powered solutions.",
    url: "https://my-portfolio-5yur3wyrq-injamam009.vercel.app",
    siteName: "Sheikh Injamamul Haque Portfolio",
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
      <body>{children}</body>
    </html>
  );
}