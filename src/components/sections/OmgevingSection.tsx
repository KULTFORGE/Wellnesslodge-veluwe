import { omgeving } from '@/data/content'
import { MapPin } from 'lucide-react'

export default function OmgevingSection() {
  return (
    <section id="omgeving" className="py-20 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-4"
          data-aos="fade-up"
        >
          In de buurt
        </h2>
        <p
          className="text-stone text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          De Veluwe voor je deur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {omgeving.map((item, i) => (
            <div
              key={i}
              className="bg-sand rounded-xl p-6"
              data-aos="fade-up"
              data-aos-delay={i * 75}
            >
              <div className="flex items-start gap-3 mb-2">
                <MapPin size={18} className="text-moss mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-forest text-lg">{item.titel}</h3>
                  <span className="text-amber text-sm font-medium">{item.afstand}</span>
                </div>
              </div>
              <p className="text-stone text-sm leading-relaxed pl-7">{item.beschrijving}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
