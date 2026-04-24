import { faq } from '@/data/content'

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-sand">
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-16"
          data-aos="fade-up"
        >
          Veelgestelde vragen
        </h2>
        <div className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="collapse collapse-arrow bg-cream rounded-xl border border-stone/10"
              data-aos="fade-up"
              data-aos-delay={i * 40}
            >
              <input type="checkbox" />
              <div className="collapse-title font-serif text-forest text-lg pr-8">
                {item.question}
              </div>
              <div className="collapse-content text-stone leading-relaxed">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
