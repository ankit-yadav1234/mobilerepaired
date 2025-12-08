import Image from 'next/image'

export default function ServiceCard({ title, desc, img }: { title: string, desc: string, img: string }) {
  return (
    
    <article className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
        <Image src={img} alt={title} width={95} height={95}  />
      </div>
      <h3 className="text-xl font-poppins font-bold text-neutral-700">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </article>
  )
}
