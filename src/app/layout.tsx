import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/providers";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Porto | Web e Mobile Developer",
  description:
    "Portfólio profissional de Gabriel Martins Moraes Porto – desenvolvedor Web e Mobile com foco em aplicações funcionais, escaláveis e bem organizadas. React, Next.js, Node, TypeScript, React Native.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Providers>
          <Navbar />
          <main className="min-h-[calc(100vh-80px)]">{children}</main>
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
