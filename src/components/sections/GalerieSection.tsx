'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { galerij } from '@/data/content'
import 'glightbox/dist/css/glightbox.css'

export default function GalerieSection() {
  useEffect(() => {
    import('glightbox').then(({ default: GLightbox }) => {
      GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: false,
      })
    })
  }, [])

  return (
    <section id="fotos" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-4"
          data-aos="fade-up"
        >
          Bekijk de lodge
        </h2>
        <p
          className="text-stone text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Klik op een foto voor de volledige weergave.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galerij.map((foto, i) => (
            <a
              key={i}
              href={foto.src}
              className="glightbox group overflow-hidden rounded-2xl block shadow-whisper hover:shadow-ring transition-shadow duration-300"
              data-gallery="lodge-gallery"
              data-description={foto.alt}
            >
              <Image
                src={foto.thumb}
                alt={foto.alt}
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
