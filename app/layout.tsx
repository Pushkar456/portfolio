import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pushkar Prajapat | Full Stack Developer",
  description:
    "Pushkar Prajapat - MERN Stack Developer specializing in secure and scalable web applications.",
  keywords: ["Pushkar Prajapat", "Full Stack Developer", "MERN Developer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-950 text-white transition-colors duration-500 overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
