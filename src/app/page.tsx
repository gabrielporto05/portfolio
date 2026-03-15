import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react'
import SpecialtyCard from '@/components/SpecialtyCard'
import { Button } from '@/components/ui/button'
import SkillCard from '@/components/SkillCard'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gabriel Porto | Desenvolvedor Full Stack',
  description:
    'Conheça os principais projetos, especialidades e serviços de Gabriel Porto em desenvolvimento web, mobile e back-end.',
  openGraph: {
    title: 'Portfólio de Gabriel Porto',
    description:
      'Especialista em Java/Spring Boot, Next.js, React Native e arquiteturas escaláveis. Veja projetos e serviços.',
    url: 'https://gabrielporto.me/',
    type: 'website'
  }
}

export default function HomePage() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <section className='w-full text-center mb-24'>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight tracking-tight'>
          Olá, eu sou <span className='text-primary'>Gabriel Martins Moraes Porto</span>
        </h1>

        <div className='mt-6 flex justify-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full'>
            <Code className='h-4 w-4 text-primary' />
            <span className='font-medium'>Desenvolvedor Full Stack | Java & Spring Boot | Next.js & TypeScript</span>
          </div>
        </div>

        <p className='mt-6 text-lg text-muted-foreground max-w-2xl mx-auto'>
          Desenvolvedor focado em arquiteturas robustas e interfaces de alta performance, com experiência em sistemas
          que atendem mais de 15 mil usuários.
        </p>

        <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
          Atualmente no ecossistema digital do IFNMG, contribuindo para o Pharus (gestão de eventos) e para o app Cajuí
          Mobile, unindo um back-end seguro em Java/Spring Boot a front-ends rápidos em Next.js e React Native.
        </p>

        <div className='mt-8 flex flex-wrap justify-center gap-4'>
          <Link href='/projects'>
            <Button size='lg'>
              Ver Projetos
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
          <Link href='/contact'>
            <Button variant='outline' size='lg'>
              Contato Direto
            </Button>
          </Link>
        </div>
      </section>

      <section id='specialties' className='w-full mb-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Minhas Especialidades</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          <SpecialtyCard
            icon={<Globe className='h-8 w-8' />}
            title='Back-end Java & Spring Boot'
            description='APIs RESTful com segurança, validação, JPA e integrações prontas para produção.'
          />
          <SpecialtyCard
            icon={<Smartphone className='h-8 w-8' />}
            title='Front-end Next.js & TypeScript'
            description='Experiências rápidas com App Router, SSR/SSG, acessibilidade e componentes reusáveis.'
          />
          <SpecialtyCard
            icon={<Code className='h-8 w-8' />}
            title='Mobile com React Native'
            description='Aplicativos com Expo Router, notificações e sincronização em tempo real para alunos e equipes.'
          />
        </div>
      </section>

      <section id='skills' className='w-full mb-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Minhas Skills</h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {/* Back-End */}
          <SkillCard label='Java 17/21' category='Back-End' />
          <SkillCard label='Spring Boot' category='Back-End' />
          <SkillCard label='Spring Security & JWT' category='Back-End' />
          <SkillCard label='Spring Data JPA' category='Back-End' />
          <SkillCard label='APIs RESTful & Bean Validation' category='Back-End' />
          <SkillCard label='Node.js' category='Back-End' />
          <SkillCard label='Go (Golang)' category='Back-End' />

          {/* Front-End */}
          <SkillCard label='Next.js (App Router)' category='Front-End' />
          <SkillCard label='React.js' category='Front-End' />
          <SkillCard label='TypeScript' category='Front-End' />
          <SkillCard label='Tailwind CSS' category='Front-End' />
          <SkillCard label='Material UI' category='Front-End' />
          <SkillCard label='Gerenciamento de Estado' category='Front-End' />

          {/* Mobile */}
          <SkillCard label='React Native' category='Mobile' />
          <SkillCard label='Expo Router' category='Mobile' />
          <SkillCard label='React Native Paper' category='Mobile' />

          {/* Banco de Dados */}
          <SkillCard label='PostgreSQL' category='Banco de Dados' />
          <SkillCard label='MySQL' category='Banco de Dados' />
          <SkillCard label='MongoDB' category='Banco de Dados' />

          {/* Ferramentas */}
          <SkillCard label='Git & GitHub' category='Ferramentas' />
          <SkillCard label='Docker' category='Ferramentas' />
          <SkillCard label='Scrum' category='Ferramentas' />
        </div>
      </section>

      <section id='about' className='w-full max-w-3xl mx-auto mb-24'>
        <h2 className='text-3xl font-bold text-center mb-8'>Sobre Mim</h2>
        <p className='text-muted-foreground leading-relaxed text-center'>
          Sou Desenvolvedor de Software Full Stack com foco em sistemas escaláveis e de alta performance utilizando o
          ecossistema Java (Spring Boot) no back-end e Next.js (TypeScript) no front-end. Minha abordagem combina código
          limpo, SSR/SSG e integrações seguras para entregar valor real aos usuários.
        </p>
        <div className='mt-8 text-center'>
          <Link href='/about'>
            <Button variant='outline'>Minha trajetória completa</Button>
          </Link>
        </div>
      </section>

      <section id='contact' className='w-full text-center'>
        <h2 className='text-3xl font-bold mb-4'>Vamos conversar?</h2>
        <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
          Aberto a oportunidades, projetos freelance ou parcerias onde Java/Spring Boot e Next.js façam a diferença.
        </p>
        <Link href='/contact'>
          <Button size='lg' className='px-8'>
            Entrar em Contato
          </Button>
        </Link>
      </section>
    </main>
  )
}
