import { meta } from '@/data/content'

export default function LocatieSection() {
  return (
    <section id="locatie" className="py-20 md:py-32 bg-sand">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-16"
          data-aos="fade-up"
        >
          Hoe vind je ons?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <address className="not-italic text-stone leading-relaxed">
              <p className="font-serif text-forest text-xl mb-4">Wellnesslodge Veluwe</p>
              <p className="text-lg">{meta.address.street}</p>
              <p className="text-lg">{meta.address.postcode} {meta.address.city}</p>
              <p className="text-lg mb-6">{meta.address.country}</p>
              <a
                href={`tel:${meta.phone}`}
                className="block hover:text-forest transition-colors mb-1"
              >
                📞 {meta.phone}
              </a>
              <a
                href={`mailto:${meta.email}`}
                className="block hover:text-forest transition-colors"
              >
                ✉️ {meta.email}
              </a>
            </address>
          </div>
          <div className="rounded-xl overflow-hidden aspect-video shadow-md" data-aos="fade-left">
            {/*
              PRE-LAUNCH ACTION:
              1. Go to https://maps.google.com
              2. Search for the lodge address
              3. Click Share → Embed a map → copy the iframe src URL
              4. Replace the pb= value below with the actual embed URL
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=REPLACE_WITH_ACTUAL_MAPS_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Wellnesslodge Veluwe"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
