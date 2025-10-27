type TimelineItemProps = {
  date: string
  title: string
  subtitle: string
  icon: React.ReactNode
  description: string
  side: 'left' | 'right'
}

const TimelineItem = ({ date, title, subtitle, icon, description, side }: TimelineItemProps) => {
  return (
    <div className={`relative flex ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}>
      <div
        className={`flex flex-col md:w-1/2 ${
          side === 'left' ? 'md:text-right' : 'md:text-left'
        } px-8 md:px-12 mt-10 md:mt-0`}
      >
        <div className='text-sm text-primary font-medium mb-4'>{date}</div>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-muted-foreground mb-2'>{subtitle}</p>
        <p className='text-muted-foreground text-pretty'>{description}</p>
      </div>

      <div className='absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center -translate-x-1/2'>
        <div className='text-primary'>{icon}</div>
      </div>
    </div>
  )
}

export default TimelineItem
