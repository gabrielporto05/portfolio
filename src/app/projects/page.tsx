"use client";
import {
  Code,
  Smartphone,
  Globe,
  Server,
  Database,
  LayoutTemplate,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <section className="w-full text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Meus <span className="text-primary">Projetos</span> e{" "}
          <span className="text-primary">Serviços</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Soluções reais desenvolvidas com tecnologias modernas e boas práticas
          de código.
        </p>
      </section>

      <section className="w-full mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Destaque</h2>
        <ProjectCard
          title="Pharus - Gestão de Eventos"
          description="Plataforma completa para gerenciamento de eventos acadêmicos e corporativos, atendendo mais de 15 mil usuários."
          technologies={[
            "Next.js",
            "TypeScript",
            "Laravel",
            "PHP",
            "MySQL",
            "MUI",
          ]}
          imageUrl="/imgs/Eventos.png"
          projectUrl="https://pharus.ifalmenara.com.br/"
          githubUrl="https://github.com/chines05"
          featured
        />
      </section>

      <section className="w-full mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projetos Pessoais
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Sistema Academico de Notas - IFNMG"
            description="Sistema acadêmico para controle de notas e avaliação de alunos."
            technologies={["Expo", "React Native", "MySQL", "PHP", "Laravel"]}
            imageUrl="/imgs/AppIFNMG.png"
            githubUrl="https://github.com/chines05/Sistema-Academico-de-Notas-IFNMG"
          />

          <ProjectCard
            title="Sistema Academico de Notas - IFNMG"
            description="Sistema acadêmico para controle de notas e avaliação de alunos."
            technologies={["Expo", "React Native", "MySQL", "PHP", "Laravel"]}
            imageUrl="/imgs/AppIFNMG.png"
            githubUrl="https://github.com/chines05/Sistema-Academico-de-Notas-IFNMG"
          />

          <ProjectCard
            title="Sistema de Gerenciamento de Eventos Acadêmicos - Trabalho POO"
            description="Sistema de gerenciamento de eventos acadêmicos com controle de participantes, atividades e pagamentos. Desenvolvido em Java com POO, SQLite e tratamento de exceções."
            technologies={["Java", "SQLite"]}
            githubUrl="https://github.com/chines05/Sistema-de-Gerenciamento-de-Eventos-Academicos"
          />

          <ProjectCard
            title="Preciso fazer mais projetos"
            description="Projeto em desenvolvimento!"
            technologies={["Nenhuma tecnologia"]}
            githubUrl="https://github.com/chines05"
          />
        </div>
      </section>

      <section className="w-full mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Serviços</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Globe className="h-8 w-8" />}
            title="Desenvolvimento Web"
            description="Aplicações modernas com React, Next.js e TypeScript. Performance, SEO e responsividade."
          />
          <ServiceCard
            icon={<Smartphone className="h-8 w-8" />}
            title="Aplicativos Mobile"
            description="Desenvolvimento de apps móveis com React Native e Expo para iOS e Android."
          />
          <ServiceCard
            icon={<Server className="h-8 w-8" />}
            title="APIs e Backend"
            description="Desenvolvimento de APIs RESTful com Go(golang) utilizando Gin-Gonic e Node.js com Express ou Fastify."
          />
        </div>
      </section>

      <section className="w-full text-center">
        <h2 className="text-2xl font-bold mb-4">
          Interessado em algum projeto ou serviço?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Posso desenvolver uma solução personalizada para suas necessidades
          específicas.
        </p>
        <Link href="/contact">
          <Button size="lg" className="px-8">
            Fale Comigo
          </Button>
        </Link>
      </section>
    </main>
  );
}
