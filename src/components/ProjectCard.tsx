'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
  featured = false
}: {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  projectUrl?: string
  githubUrl?: string
  featured?: boolean
}) => {
  return (
    <div className={`border rounded-lg overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
      {imageUrl && (
        <div className='relative h-48 md:h-64 bg-muted'>
          <Image src={imageUrl} alt={`Captura de tela do projeto ${title}`} fill className='object-cover' />
        </div>
      )}
      <div className='p-6'>
        <h3 className='text-2xl font-bold mb-2'>{title}</h3>
        <p className='text-muted-foreground mb-4'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-6'>
          {technologies.map(tech => (
            <span key={tech} className='text-xs px-2 py-1 bg-accent rounded-md'>
              {tech}
            </span>
          ))}
        </div>

        <div className='flex gap-3'>
          {projectUrl && (
            <Link href={projectUrl} target='_blank'>
              <Button variant='outline' size='sm'>
                Ver Projeto
              </Button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target='_blank'>
              <Button variant='outline' size='sm'>
                Código Fonte
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
