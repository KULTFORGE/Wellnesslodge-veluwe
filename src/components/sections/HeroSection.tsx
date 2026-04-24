import Image from 'next/image'
import { meta } from '@/data/content'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/hero-main.webp"
        alt="Wellness lodge Veluwe — privé sauna en hottub in de natuur"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest/50" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl text-cream leading-none mb-6">
          Jouw eigen wellness<br />
          <em>op de Veluwe</em>
        </h1>
        <p className="text-cream/90 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Privé sauna, hottub en ruime tuin. Op 100 meter van het Edese bos. Volledig voor jullie alleen.
        </p>
        <a
          href={meta.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg bg-amber text-cream border-0 hover:bg-amber/90"
        >
          Boek direct
        </a>
      </div>
      <a
        href="#intro"
        aria-label="Scroll naar beneden"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors animate-bounce text-2xl"
      >
        ↓
      </a>
    </section>
  )
}
