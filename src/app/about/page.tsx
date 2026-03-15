import { GraduationCap, Code, Smartphone } from 'lucide-react'
import TimelineItem from '@/components/TimelineItem'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Trajetória profissional, formação e experiência de Gabriel Porto em desenvolvimento web, mobile e back-end.',
  openGraph: {
    title: 'Sobre Gabriel Porto',
    description:
      'Conheça a formação e a experiência de Gabriel Porto construindo produtos digitais em Java/Spring Boot e Next.js.',
    url: 'https://gabrielporto.me/about',
    type: 'profile'
  }
}

export default function AboutPage() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <section className='w-full text-center mb-20'>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-6'>
          Minha <span className='text-primary'>Jornada</span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Da formação técnica aos sistemas que atendem mais de 15 mil usuários, cada entrega reflete meu foco em
          qualidade, performance e impacto real.
        </p>
      </section>

      <section className='w-full mb-24 flex flex-col md:flex-row gap-12 items-center'>
        <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20'>
          <Image
            src='/imgs/euRosto.jpeg'
            alt='Gabriel Porto - Desenvolvedor Front End'
            fill
            className='object-cover'
            priority
          />
        </div>

        <div className='flex-1'>
          <h2 className='text-2xl font-bold mb-4'>Quem sou eu</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              Sou <strong>Gabriel Martins Moraes Porto</strong>, Desenvolvedor Full Stack especializado em unir
              back-ends seguros com <strong>Java e Spring Boot</strong> a front-ends rápidos com{' '}
              <strong>Next.js e TypeScript</strong>.
            </p>
            <p>
              Hoje integro o ecossistema digital do <strong>IFNMG</strong>, onde contribuo para o{' '}
              <strong>Pharus</strong> (gestão de eventos em larga escala) e para o <strong>Cajuí Mobile</strong>
              (experiência acadêmica moderna em dispositivos móveis).
            </p>
            <p>
              Minha abordagem combina <strong>Clean Code</strong>, SSR/SSG, autenticação segura e integrações bem
              tipadas. Trabalho com Scrum, documentação clara e versionamento disciplinado.
            </p>
            <p>
              Busco criar soluções que permaneçam robustas em produção e ofereçam experiências fluidas para quem usa.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full mb-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Linha do Tempo</h2>

        <div className='relative'>
          <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/20 -translate-x-1/2'></div>

          <div className='space-y-12'>
            <TimelineItem
              date='2021 - 2023'
              title='Técnico em Informática'
              subtitle='EE Tancredo Neves - Ensino Médio Integrado'
              icon={<GraduationCap className='h-5 w-5' />}
              description='Formação técnica com foco em fundamentos da computação, redes, e desenvolvimento de software.'
              side='right'
            />

            <TimelineItem
              date='2024 - 2026 (previsto)'
              title='Tecnólogo em Análise e Desenvolvimento de Sistemas'
              subtitle='IFNMG - Superior Tecnológico'
              icon={<GraduationCap className='h-5 w-5' />}
              description='Aprofundamento em engenharia de software, arquitetura de sistemas e desenvolvimento web/mobile.'
              side='left'
            />

            <TimelineItem
              date='Mai 2024 - Ago 2025'
              title='Desenvolvedor Front-End'
              subtitle='IFNMG | Plataforma Pharus'
              icon={<Code className='h-5 w-5' />}
              description='Next.js com TypeScript, SSR/SSG, formulários tipados e acessíveis para uma plataforma que atende mais de 15 mil usuários.'
              side='right'
            />

            <TimelineItem
              date='Ago 2025 - Atual'
              title='Desenvolvedor de Software Mobile'
              subtitle='IFNMG | Cajuí Mobile'
              icon={<Smartphone className='h-5 w-5' />}
              description='Construção de app oficial com React Native e Expo Router, consumo de APIs complexas e sincronização em tempo real (notificações).'
              side='left'
            />
          </div>
        </div>
      </section>

      <section className='w-full text-center'>
        <h2 className='text-2xl font-bold mb-4'>Vamos construir algo incrível?</h2>
        <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
          Se você busca um desenvolvedor Full Stack que una Java/Spring Boot e Next.js para entregar valor rápido e
          sustentável, vamos conversar.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link href='/contact'>
            <Button size='lg'>Contato Profissional</Button>
          </Link>
          <Link href='/projects'>
            <Button variant='outline' size='lg'>
              Ver Meus Projetos
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
