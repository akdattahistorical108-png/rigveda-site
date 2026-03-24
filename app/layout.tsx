import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ঋগ্বেদ - Rigveda Portal",
  description: "Explore the ancient wisdom of Rigveda with translations and interpretations in Bengali",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="bn">
      <body className="flex flex-col min-h-screen bg-amber-50">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}