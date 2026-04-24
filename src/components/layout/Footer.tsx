import { meta } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-cream text-xl mb-3">Wellnesslodge Veluwe</h3>
            <p className="text-sm leading-relaxed">
              Privé sauna & hottub op de Veluwe.<br />
              Op 100m van het Edese bos.
            </p>
          </div>
          <div>
            <h4 className="text-cream font-medium mb-3 text-sm uppercase tracking-wider">Contact</h4>
            <address className="not-italic text-sm leading-relaxed space-y-1">
              <p>{meta.address.street}</p>
              <p>{meta.address.postcode} {meta.address.city}</p>
              <a href={`tel:${meta.phone}`} className="block hover:text-cream transition-colors">{meta.phone}</a>
              <a href={`mailto:${meta.email}`} className="block hover:text-cream transition-colors">{meta.email}</a>
            </address>
          </div>
          <div>
            <h4 className="text-cream font-medium mb-3 text-sm uppercase tracking-wider">Boeken</h4>
            <a
              href={meta.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-amber text-cream border-0 hover:bg-amber/90"
            >
              Beschikbaarheid bekijken
            </a>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 text-sm text-cream/40 text-center">
          © {new Date().getFullYear()} Wellnesslodge Veluwe · Alle rechten voorbehouden
        </div>
      </div>
    </footer>
  )
}
