import type { ElementType } from 'react'
import * as LucideIcons from 'lucide-react'
import { faciliteiten } from '@/data/content'

export default function FaciliteitenSection() {
  return (
    <section id="faciliteiten" className="py-20 md:py-32 bg-sand">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-4"
          data-aos="fade-up"
        >
          Alles wat je nodig hebt
        </h2>
        <p
          className="text-stone text-center mb-16 text-lg"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Volledig privé. Zonder gedeelde faciliteiten.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {faciliteiten.map((item, i) => {
            const Icon = LucideIcons[item.icon as keyof typeof LucideIcons] as ElementType
            return (
              <div
                key={i}
                className="bg-cream rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-whisper hover:shadow-ring transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                {Icon && <Icon size={32} className="text-moss" />}
                <h3 className="font-serif text-forest text-base">{item.label}</h3>
                <p className="text-stone text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
