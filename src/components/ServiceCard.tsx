const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className='border rounded-lg p-6 hover:border-primary transition-all hover:shadow-md'>
      <div className='flex items-center gap-4 mb-4'>
        <div className='p-2 rounded-md bg-primary/10 text-primary'>{icon}</div>
        <h3 className='text-xl font-semibold'>{title}</h3>
      </div>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  )
}

export default ServiceCard
