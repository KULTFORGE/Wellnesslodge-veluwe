import { reviews } from '@/data/content'

function Stars({ score }: { score: number }) {
  const filled = Math.round((score / 10) * 5)
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < filled ? 'text-amber' : 'text-stone/20'}>★</span>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-4"
          data-aos="fade-up"
        >
          Wat gasten zeggen
        </h2>
        <p
          className="text-stone text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Beoordeeld met een gemiddelde van 8,7 op BookingExperts
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-sand rounded-xl p-6 shadow-whisper"
              data-aos="fade-up"
              data-aos-delay={i * 75}
            >
              <Stars score={review.score} />
              <p className="text-stone leading-relaxed mb-4 italic">"{review.tekst}"</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-forest">{review.naam}</span>
                <span className="text-stone/60">{review.datum}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
