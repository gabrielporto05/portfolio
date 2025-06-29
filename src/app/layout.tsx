import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Porto | Desenvolvedor Web & Mobile",
  description:
    "Portfólio profissional de Gabriel Martins Moraes Porto – desenvolvedor Web e Mobile com foco em aplicações funcionais, escaláveis e bem organizadas. React, Next.js, Node, TypeScript, React Native.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
