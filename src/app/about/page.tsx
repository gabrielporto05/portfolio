'use client'

import Image from 'next/image'
import { GraduationCap, Code, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import TimelineItem from '@/components/TimelineItem'

export default function AboutPage() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <section className='w-full text-center mb-20'>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-6'>
          Minha <span className='text-primary'>Jornada</span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Da formação técnica aos desafios profissionais, cada linha de código escrita conta parte da minha história.
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
              Me chamo <strong>Gabriel Martins Moraes Porto</strong>, tenho 19 anos e sou um desenvolvedor Web & Mobile
              com foco em desenvolvimento Front End. Gosto de trabalhar com tecnologias modernas e construir interfaces
              funcionais, bem organizadas e com atenção à performance.
            </p>
            <p>
              Iniciei minha trajetória técnica durante o curso de Informática no ensino médio (EE Tancredo Neves,
              2021–2023), e atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> no IFNMG. Com isso,
              venho consolidando conhecimentos práticos e acadêmicos em desenvolvimento web.
            </p>
            <p>
              Desde agosto de 2024, atuo como desenvolvedor na <strong>plataforma Pharus – Gestão de Eventos</strong>,
              onde sou responsável por entregar soluções front-end com Next.js, TypeScript e integrações com APIs.
              Também desenvolvo projetos pessoais e freelances voltados para interfaces responsivas e boas práticas de
              código.
            </p>
            <p>
              Prezo por consistência, clareza na estruturação do projeto, versionamento limpo e entregas bem
              documentadas — sempre com foco em propósito real e experiência do usuário.
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
              date='2024 - Atual'
              title='Análise e Desenvolvimento de Sistemas'
              subtitle='IFNMG - Superior Tecnológico'
              icon={<GraduationCap className='h-5 w-5' />}
              description='Aprofundamento em engenharia de software, arquitetura de sistemas e desenvolvimento web e mobile.'
              side='left'
            />

            <TimelineItem
              date='Ago 2024 - Atual'
              title='Desenvolvedor Front End'
              subtitle='Pharus - Gestão de Eventos'
              icon={<Code className='h-5 w-5' />}
              description='Desenvolvimento da plataforma web usando Next.js e TypeScript. Responsável por implementar interfaces responsivas, componentização e integração com APIs REST.'
              side='right'
            />

            <TimelineItem
              date='2024 - Atual'
              title='Projetos Pessoais'
              subtitle='Freelances e Projetos Pessoais'
              icon={<Smartphone className='h-5 w-5' />}
              description='Desenvolvimento de aplicações web e mobile para clientes e projetos pessoais, explorando novas tecnologias como PHP com Laravel.'
              side='left'
            />
          </div>
        </div>
      </section>

      <section className='w-full text-center'>
        <h2 className='text-2xl font-bold mb-4'>Vamos construir algo incrível?</h2>
        <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
          Se você busca um desenvolvedor Front End comprometido, profissional, em busca de crescimento e aprendizado,
          estou aqui para ajudar.
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
