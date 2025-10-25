import Link from 'next/link'
import { Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t bg-background/80'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Gabriel Porto</h3>
            <p className='text-muted-foreground'>
              Desenvolvedor Full Stack especializado em criar soluções digitais performáticas e acessíveis.
            </p>
            <div className='flex gap-4 pt-2'>
              <Link
                href='https://linkedin.com/in/gabrielporto05'
                target='_blank'
                className='text-muted-foreground transition-colors hover:text-primary'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href='https://github.com/gabrielporto05'
                target='_blank'
                className='text-muted-foreground transition-colors hover:text-primary'
              >
                <Github className='h-5 w-5' />
              </Link>
              <Link
                href='mailto:gpalmenara@gmail.com'
                target='_blank'
                className='text-muted-foreground transition-colors hover:text-primary'
              >
                <Mail className='h-5 w-5' />
              </Link>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Navegação</h3>
            <ul className='space-y-2 text-muted-foreground'>
              <li>
                <Link href='/' className='hover:text-primary transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-primary transition-colors'>
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link href='/projects' className='hover:text-primary transition-colors'>
                  Projetos
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-primary transition-colors'>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Contato</h3>
            <address className='not-italic text-muted-foreground space-y-2'>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                <span>gpalmenara@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                <span>(33) 99863-1093</span>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='h-4 w-4' />
                <span>Minas Gerais, Brasil</span>
              </div>
            </address>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className='mt-16 border-t pt-8 text-center text-sm text-muted-foreground'>
          <p>© {currentYear} Gabriel Porto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
