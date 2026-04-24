import Image from 'next/image'
import { usecases } from '@/data/content'

export default function UseCasesSection() {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-16"
          data-aos="fade-up"
        >
          Voor wie is dit?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usecases.map((item, i) => (
            <div key={i} className="group" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="overflow-hidden rounded-xl mb-5">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-xl text-forest mb-2">{item.title}</h3>
              <p className="text-stone leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
