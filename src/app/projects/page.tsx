import { Smartphone, Globe, Server } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projetos e Serviços',
  description:
    'Portfólio de projetos de Gabriel Porto, incluindo Pharus, Cajuí Mobile e serviços em Java, Spring Boot e Next.js.',
  openGraph: {
    title: 'Projetos de Gabriel Porto',
    description:
      'Confira cases como Pharus, Cajuí Mobile e soluções sob medida com Next.js, React Native e Spring Boot.',
    url: 'https://gabrielporto.me/projects',
    type: 'website'
  }
}

export default function ProjectsPage() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <section className='w-full text-center mb-20'>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-6'>
          Meus <span className='text-primary'>Projetos</span> e <span className='text-primary'>Serviços</span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Soluções reais desenvolvidas com tecnologias modernas e boas práticas de código.
        </p>
      </section>

      <section className='w-full mb-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Destaque</h2>
        <ProjectCard
          title='Pharus - Gestão de Eventos'
          description='Plataforma oficial do IFNMG para gestão de eventos, com SSR/SSG, formulários tipados e integrações seguras que atendem mais de 15 mil usuários.'
          technologies={['Next.js', 'TypeScript', 'SSR/SSG', 'Spring Boot APIs', 'PostgreSQL']}
          imageUrl='/imgs/Eventos.png'
          projectUrl='https://eventos.ifalmenara.com.br/'
          featured
        />
      </section>

      <section className='w-full mb-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Projetos de Destaque</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectCard
            title='Cajuí Mobile'
            description='App oficial para modernizar o acesso acadêmico de alunos e servidores, com notificações em tempo real e consumo de APIs complexas.'
            technologies={['React Native', 'Expo Router', 'TypeScript', 'Push Notifications']}
            imageUrl='/imgs/Cajui.png'
          />

          <ProjectCard
            title='Vitrine de Projetos (IFNMG)'
            description='Plataforma institucional para gestão e exposição de projetos acadêmicos, conectando equipes e avaliadores.'
            technologies={['React.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Fastify', 'Prisma', 'JWT']}
            imageUrl='/imgs/VitrineProjetos.png'
            projectUrl='https://projetos.ifalmenara.com.br'
          />

          <ProjectCard
            title='RB SOFT Soluções'
            description='Landing page institucional otimizada para performance, responsividade e SEO.'
            technologies={['React.js', 'Vite', 'Tailwind CSS', 'SEO']}
            imageUrl='/imgs/RbSoft.png'
            projectUrl='https://rbsoft.inf.br'
          />

          <ProjectCard
            title='Sistema de Gerenciamento de Eventos Acadêmicos'
            description='Aplicação de linha de comando em Java com POO, SQLite e tratamento de exceções para cadastro e controle de eventos, participantes e pagamentos.'
            technologies={['Java', 'SQLite', 'POO']}
            imageUrl='https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80'
            githubUrl='https://github.com/gabrielporto05/Sistema-de-Gerenciamento-de-Eventos-Academicos'
          />
        </div>
      </section>

      <section className='w-full mb-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Serviços</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          <ServiceCard
            icon={<Globe className='h-8 w-8' />}
            title='APIs e Back-end Java'
            description='Spring Boot, segurança, validação, JPA e documentação clara para integrações confiáveis.'
          />
          <ServiceCard
            icon={<Smartphone className='h-8 w-8' />}
            title='Front-end Next.js & TypeScript'
            description='Interfaces performáticas com SSR/SSG, acessibilidade e componentização escalável.'
          />
          <ServiceCard
            icon={<Server className='h-8 w-8' />}
            title='Aplicativos Mobile'
            description='Apps React Native com Expo Router, notificações e experiência fluida em múltiplos dispositivos.'
          />
        </div>
      </section>

      <section className='w-full text-center'>
        <h2 className='text-2xl font-bold mb-4'>Interessado em algum projeto ou serviço?</h2>
        <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
          Posso desenvolver uma solução personalizada com a combinação certa de Java/Spring Boot, Next.js e React
          Native.
        </p>
        <Link href='/contact'>
          <Button size='lg' className='px-8'>
            Fale Comigo
          </Button>
        </Link>
      </section>
    </main>
  )
}
