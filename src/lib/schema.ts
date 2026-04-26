import { meta, faciliteiten, faq } from '@/data/content'

export function getLodgingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Wellnesslodge Veluwe',
    description: meta.description,
    url: 'https://wellnesslodge-veluwe.nl',
    telephone: meta.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress:   meta.address.street,
      addressLocality: meta.address.city,
      postalCode:      meta.address.postcode,
      addressCountry:  'NL',
    },
    geo: {
      '@type':    'GeoCoordinates',
      latitude:  meta.coordinates.lat,
      longitude: meta.coordinates.lng,
    },
    amenityFeature: faciliteiten.map(f => ({
      '@type': 'LocationFeatureSpecification',
      name:    f.label,
      value:   true,
    })),
    numberOfRooms: 2,
    petsAllowed:   true,
    checkinTime:   '15:00',
    checkoutTime:  '11:00',
    image: 'https://wellnesslodge-veluwe.nl/images/hero/hero-main.webp',
    priceRange: '€€',
    sameAs: [
      'https://www.instagram.com/wellnesslodge.veluwe',
      // Voeg toe zodra Google Business Profile live is:
      // 'https://maps.google.com/?cid=[google-business-id]',
    ],
    // Voeg toe zodra je het echte aantal reviews weet van BookingExperts:
    // aggregateRating: {
    //   '@type': 'AggregateRating',
    //   ratingValue: '8.7',
    //   bestRating: '10',
    //   ratingCount: '47',
    // },
  }
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name:    item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    item.answer,
      },
    })),
  }
}
