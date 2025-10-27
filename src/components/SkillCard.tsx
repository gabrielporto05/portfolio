type SkillCardProps = {
  label: string
  category: string
}

const SkillCard = ({ label, category }: SkillCardProps) => {
  return (
    <div className='border rounded-lg p-4 hover:border-primary transition-colors hover:scale-105'>
      <div className='font-medium'>{label}</div>
      <div className='text-xs text-muted-foreground mt-1'>{category}</div>
    </div>
  )
}

export default SkillCard
