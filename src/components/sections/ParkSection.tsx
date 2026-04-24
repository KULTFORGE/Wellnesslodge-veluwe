import { park } from '@/data/content'
import { Check } from 'lucide-react'

export default function ParkSection() {
  return (
    <section id="park" className="py-20 md:py-32 bg-forest">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-cream text-center mb-4"
          data-aos="fade-up"
        >
          {park.naam}
        </h2>
        <p
          className="text-cream/70 text-center text-lg mb-12"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {park.intro}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {park.faciliteiten.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-cream/80"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <Check size={18} className="text-amber flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
