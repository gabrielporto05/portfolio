import { Plus_Jakarta_Sans } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ThemeProviders } from '@/providers'
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Gabriel Porto | Desenvolvedor Web e Mobile',
  description: 'Portfólio de Gabriel Porto – especialista em React, Next.js, Node.js, TypeScript, React Native e Go.',
  keywords: [
    'Gabriel Porto',
    'Desenvolvedor Web',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'React Native',
    'Go',
    'Portfólio'
  ],
  authors: [{ name: 'Gabriel Porto', url: 'https://gabrielporto.me' }],
  creator: 'Gabriel Porto',
  publisher: 'Gabriel Porto',
  metadataBase: new URL('https://gabrielporto.me'),
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    title: 'Gabriel Porto | Desenvolvedor Web e Mobile',
    description: 'Portfólio de Gabriel Porto – especialista em aplicações modernas e escaláveis.',
    url: 'https://gabrielporto.me',
    siteName: 'Gabriel Porto',
    images: [
      {
        url: 'https://gabrielporto.me/gabrielporto.jpeg',
        width: 1200,
        height: 630,
        alt: 'Gabriel Porto - Desenvolvedor Web e Mobile'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Porto | Desenvolvedor Web e Mobile',
    description: 'Portfólio de Gabriel Porto – especialista em aplicações modernas e escaláveis.',
    images: ['https://gabrielporto.me/gabrielporto.jpeg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <head>
        <meta name='google-site-verification' content='PPVFq0hUuQzG01luYHb07DRZsf63pO_q4DICkbXXW00' />
        <script type='application/ld+json'>
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gabriel Porto",
              "url": "https://gabrielporto.me",
              "sameAs": [
                "https://github.com/gabrielporto",
                "https://linkedin.com/in/gabrielporto"
              ],
              "jobTitle": "Desenvolvedor Web e Mobile",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelancer"
              }
            }
          `}
        </script>
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <ThemeProviders>
          <Navbar />
          <main className='min-h-[calc(100vh-80px)]'>{children}</main>
          <Footer />
        </ThemeProviders>
        <Toaster />
      </body>
    </html>
  )
}
