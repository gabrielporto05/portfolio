"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center">
      <section className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Olá, eu sou <span className="text-primary">Gabriel Porto</span>
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl mb-8">
          Desenvolvedor Web & Mobile especializado em construir aplicações
          claras, escaláveis e com boas práticas. Trabalho com React, Next.js,
          Node.js e React Native.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/projetos">
            <Button variant="default" size="lg">
              Ver Projetos
            </Button>
          </Link>
          <Link href="/contato">
            <Button variant="outline" size="lg">
              Entrar em Contato
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-16 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-left mb-6">Stack Atual</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-left">
          <Tech label="React" />
          <Tech label="Next.js" />
          <Tech label="TypeScript" />
          <Tech label="Tailwind CSS" />
          <Tech label="Shadcn UI" />
          <Tech label="Node.js" />
          <Tech label="MySQL" />
          <Tech label="React Native" />
          <Tech label="Git & GitHub" />
        </div>
      </section>
    </main>
  );
}

function Tech({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 border rounded-lg text-muted-foreground hover:text-primary transition-colors">
      {label}
    </span>
  );
}
