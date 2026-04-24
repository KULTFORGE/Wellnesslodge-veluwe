import { praktisch } from '@/data/content'
import { Users, BedDouble, Clock, PawPrint, Baby } from 'lucide-react'

const getItems = (p: typeof praktisch) => [
  { icon: Users,     label: 'Max. personen', value: `${p.maxPersonen} gasten` },
  { icon: BedDouble, label: 'Slaapkamers',   value: `${p.slaapkamers} slaapkamers` },
  { icon: Clock,     label: 'Inchecken',     value: `Vanaf ${p.checkin}` },
  { icon: Clock,     label: 'Uitchecken',    value: `Uiterlijk ${p.checkout}` },
  { icon: PawPrint,  label: 'Huisdieren',    value: 'Welkom' },
  { icon: Baby,      label: 'Babybedje',     value: 'Op aanvraag' },
]

export default function PraktischSection() {
  return (
    <section id="praktisch" className="py-20 md:py-32 bg-sand">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-16"
          data-aos="fade-up"
        >
          Praktische informatie
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {getItems(praktisch).map((item, i) => (
            <div
              key={i}
              className="bg-cream rounded-xl p-6 flex flex-col items-center text-center gap-2"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <item.icon size={24} className="text-moss" />
              <p className="text-stone text-sm">{item.label}</p>
              <p className="font-serif text-forest text-lg">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-stone" data-aos="fade-up">
          <p>
            Minimale verblijfsduur: <strong className="text-earth">{praktisch.minVerblijf}</strong>
            {' · '}
            Prijs vanaf: <strong className="text-earth">{praktisch.prijsVanaf} per nacht</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
