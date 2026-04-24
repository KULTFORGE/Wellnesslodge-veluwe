import Image from 'next/image'
import { danny } from '@/data/content'

export default function OverDannySection() {
  return (
    <section id="danny" className="py-20 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-16"
          data-aos="fade-up"
        >
          Over Danny
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0" data-aos="fade-right">
            <Image
              src={danny.foto}
              alt={danny.fotoAlt}
              width={240}
              height={240}
              className="rounded-full object-cover w-48 h-48 md:w-60 md:h-60"
              sizes="240px"
            />
          </div>
          <div data-aos="fade-left">
            <p className="font-serif text-forest text-xl mb-4">Hoi, ik ben {danny.naam}.</p>
            <p className="text-stone leading-relaxed text-lg">{danny.tekst}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
