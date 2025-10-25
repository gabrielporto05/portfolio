'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react'
import SkillCard from '@/components/SkillCard'
import SpecialtyCard from '@/components/SpecialtyCard'

export default function HomePage() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <section className='w-full text-center mb-24'>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight tracking-tight'>
          Olá, eu sou <span className='text-primary'>Gabriel Porto</span>
        </h1>

        <div className='mt-6 flex justify-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full'>
            <Code className='h-4 w-4 text-primary' />
            <span className='font-medium'>Web e Mobile Developer</span>
          </div>
        </div>

        <p className='mt-6 text-lg text-muted-foreground max-w-2xl mx-auto'>
          Especialista em desenvolvimento Front End utilizando tecnologias modernas, criando interfaces performáticas,
          acessíveis e com ótima experiência de usuário.
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
            title='Desenvolvimento Web'
            description='Aplicações modernas com React, Next.js e TypeScript. Foco em performance, SEO e boas práticas.'
          />
          <SpecialtyCard
            icon={<Smartphone className='h-8 w-8' />}
            title='Mobile Apps'
            description='Soluções cross-platform com React Native, integrações nativas e experiência fluída.'
          />
          <SpecialtyCard
            icon={<Code className='h-8 w-8' />}
            title='UI/UX Implementation'
            description='Implementação fiel de designs com TailwindCSS, Shadcn UI e sistemas de design consistentes.'
          />
        </div>
      </section>

      <section id='skills' className='w-full mb-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Minhas Skills</h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          <SkillCard label='TypeScript' category='Linguagens' />
          <SkillCard label='JavaScript' category='Linguagens' />
          <SkillCard label='PHP' category='Linguagens' />
          <SkillCard label='React.js' category='Frontend' />
          <SkillCard label='Next.js' category='Frontend' />
          <SkillCard label='Tailwind CSS' category='Styling' />
          <SkillCard label='Shadcn UI' category='UI Libraries' />
          <SkillCard label='MUI' category='UI Libraries' />
          <SkillCard label='React Native' category='Mobile' />
          <SkillCard label='Expo' category='Mobile' />
          <SkillCard label='Node.js' category='Backend' />
          <SkillCard label='Laravel' category='Backend' />
          <SkillCard label='Express | Fastify' category='Backend' />
          <SkillCard label='MySQL' category='Database' />
          <SkillCard label='PostgreSQL' category='Database' />
          <SkillCard label='Git/GitHub' category='Ferramentas' />
        </div>
      </section>

      <section id='about' className='w-full max-w-3xl mx-auto mb-24'>
        <h2 className='text-3xl font-bold text-center mb-8'>Sobre Mim</h2>
        <p className='text-muted-foreground leading-relaxed text-center'>
          Formado pelo IFNMG, desenvolvo soluções web e mobile com foco em código limpo e experiências de usuário bem
          fundamentadas. Atualmente colaboro em projetos institucionais pelo IFNMG, como Desenvolvedor de Software.
          Valorizo trabalhos colaborativos, boas práticas e tecnologias modernas.
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
          Estou disponível para oportunidades, projetos freelance ou apenas para trocar ideias sobre tecnologia.
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
