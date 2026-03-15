import type { Metadata } from 'next'
import { ContactPageClient } from '@/components/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com Gabriel Porto para projetos, freelas ou oportunidades em Java/Spring Boot, Next.js e React Native.',
  openGraph: {
    title: 'Contato | Gabriel Porto',
    description: 'Envie uma mensagem ou conecte-se nas redes para discutir projetos e oportunidades.',
    url: 'https://gabrielporto.me/contact',
    type: 'website'
  }
}

export default function ContactPage() {
  return <ContactPageClient />
}
