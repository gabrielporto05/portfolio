'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Switch } from './ui/switch'
import { Label } from './ui/label'

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, systemTheme } = useTheme()

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Contato', path: '/contact' }
  ]

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
        <Link href='/' className='text-lg font-bold'>
          Gabriel Porto
        </Link>

        <div className='hidden items-center gap-6 md:flex'>
          {routes.map(route => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === route.path ? 'text-primary font-medium' : 'text-muted-foreground'
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <Label htmlFor='theme-switch' className='text-sm'>
              {isDark ? 'Dark' : 'Light'}
            </Label>
            <Switch
              id='theme-switch'
              checked={isDark}
              onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
            />
          </div>

          <Sheet>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon' aria-label='Abrir menu'>
                <Menu className='h-7 w-7' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <SheetTitle className='text-left text-lg font-semibold pt-4 pl-4'>Navegação</SheetTitle>
              <div className='flex flex-col'>
                {routes.map(route => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`px-4 py-2 text-lg transition-colors rounded-md hover:bg-accent ${
                      pathname === route.path ? 'text-primary font-medium bg-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
