// src/data/content.ts
//
// BEFORE GOING LIVE — search this file for "[" and fill in every placeholder.

export const meta = {
  title: 'Wellnesslodge Veluwe | Privé sauna & hottub bij Edese bos',
  description: 'Ontspan in onze luxe wellness lodge op de Veluwe. Privé sauna, hottub en ruime tuin. Op 100m van het Edese bos. Direct boeken.',
  bookingUrl: 'https://app.bookingexperts.com/nl/ra/873/35978/Yq314PS97ChjsGBeKyp4jtCTDE8WNLWSHXF473KR',
  phone: '[DANNY_PHONE]',
  email: '[DANNY_EMAIL]',
  address: {
    street:   '[STRAAT + HUISNUMMER]',
    city:     'Ede',
    postcode: '[POSTCODE]',
    country:  'Nederland',
  },
  coordinates: {
    lat: '[LAT]',
    lng: '[LNG]',
  },
}

export const faciliteiten = [
  { icon: 'Thermometer', label: 'Privé sauna',      description: '4-persoons Finse sauna, volledig privé.' },
  { icon: 'Droplets',   label: 'Privé hottub',      description: 'Hottub voor 4 personen in de omheinde tuin.' },
  { icon: 'TreePine',   label: 'Omheinde tuin',     description: 'Ruime, volledig omheinde tuin voor totale privacy.' },
  { icon: 'Wind',       label: 'Airconditioning',   description: 'Aanwezig in de slaapkamers en woonkamer.' },
  { icon: 'Shower',     label: 'Buitendouche',      description: 'Warm en koud, direct naast de tuin.' },
  { icon: 'PawPrint',   label: 'Huisdieren welkom', description: 'Je viervoetige vriend is van harte welkom.' },
  { icon: 'Car',        label: 'Gratis parkeren',   description: 'Eigen parkeerplaats direct naast de lodge.' },
  { icon: 'Wifi',       label: 'Gratis WiFi',       description: 'Snelle verbinding in het hele huis.' },
]

export const usecases = [
  {
    title:       'Romantisch weekend',
    description: 'Laat alles achter je. Hottub, sauna, stilte. Alleen jullie.',
    image:       '/images/faciliteiten/hottub-avond.webp',
    imageAlt:    'Privé hottub wellness lodge Veluwe',
  },
  {
    title:       'Vriendinnen weekend',
    description: 'Even helemaal niets moeten. Samen ontspannen in de sauna, wandelen door het Edese bos.',
    image:       '/images/gallery/woonkamer.webp',
    imageAlt:    'Gezellige woonkamer wellness lodge Veluwe',
  },
  {
    title:       'Gezinsweekend',
    description: 'Twee slaapkamers, een ruime tuin en alle parkfaciliteiten binnen handbereik.',
    image:       '/images/gallery/tuin.webp',
    imageAlt:    'Ruime tuin wellness lodge Veluwe',
  },
]

export const praktisch = {
  slaapkamers: 2,
  maxPersonen: 4,
  babybedje:   true,
  huisdieren:  true,
  checkin:     '15:00',
  checkout:    '11:00',
  minVerblijf: '2 nachten',
  prijsVanaf:  '€[X]',
}

export const faq = [
  {
    question: 'Zijn huisdieren toegestaan?',
    answer:   'Ja, huisdieren zijn welkom in de wellness lodge. De tuin is volledig omheind, dus je hond kan veilig buitenspelen.',
  },
  {
    question: 'Hoeveel personen kunnen er in de lodge?',
    answer:   'De lodge is geschikt voor maximaal 4 personen. Er zijn 2 slaapkamers met comfortabele boxspringbedden.',
  },
  {
    question: "Kan ik ook met z'n tweetjes boeken?",
    answer:   'Absoluut. De lodge is ideaal voor een romantisch weekend voor twee.',
  },
  {
    question: 'Hoe laat kan ik inchecken?',
    answer:   'Inchecken kan vanaf 15:00. Uitchecken is uiterlijk om 11:00.',
  },
  {
    question: 'Is er parkeergelegenheid?',
    answer:   'Ja, er is een gratis parkeerplaats direct naast de lodge.',
  },
  {
    question: 'Hoe ver is het Edese bos?',
    answer:   'De lodge ligt op slechts 100 meter van het Edese bos. Je loopt er zo naartoe.',
  },
  {
    question: 'Wat zijn de parkfaciliteiten?',
    answer:   'Op het park zijn onder andere een verwarmd buitenzwembad, restaurant, snackbar, fiets- en e-bikeverhuur en een grote indoorspeeltuin.',
  },
  {
    question: 'Kan ik een babybedje regelen?',
    answer:   'Ja, een babybedje is beschikbaar op aanvraag. Vermeld dit bij je reservering.',
  },
]

export const reviews = [
  {
    naam:   'Maud V.',
    score:  9,
    datum:  'Augustus 2024',
    tekst:  'De omgeving, de vakantiewoning, het welkomstservicepakket en de privacy van de tuin. Echt een aanrader.',
  },
  {
    naam:   'Rebecca B.',
    score:  8,
    datum:  'Augustus 2024',
    tekst:  'De hottub en sauna waren heel fijn. Heerlijk om zo privé te kunnen ontspannen.',
  },
  {
    naam:   'Fred K.',
    score:  9,
    datum:  'Juni 2024',
    tekst:  'Medewerkers, de omgeving en het park. Zeker voor herhaling vatbaar.',
  },
  {
    naam:   'Elisa V.',
    score:  9,
    datum:  'Augustus 2024',
    tekst:  'We hebben echt genoten! Een geweldige plek om even helemaal tot rust te komen.',
  },
  {
    naam:   'Lisanne G.',
    score:  8,
    datum:  'Augustus 2024',
    tekst:  'De grote tuin en hoe netjes het park en de huisjes waren. Top verzorgd.',
  },
  {
    naam:   'Simon B.',
    score:  9,
    datum:  'Juni 2024',
    tekst:  'Het zwembad, de rustige periode en alles was schoon. Zeker voor herhaling vatbaar.',
  },
]

export const danny = {
  naam:    'Danny',
  tekst:   '[DANNY_BIO: 2-3 zinnen. Persoonlijk, warm. Waarom hij de lodge begon, wat hij wil dat gasten ervaren.]',
  foto:    '/images/danny/danny.webp',
  fotoAlt: 'Danny, eigenaar van Wellnesslodge Veluwe',
}

export const park = {
  naam:  'Droompark De Zanding',
  intro: 'De lodge ligt op het terrein van Droompark De Zanding. Als gast heb je toegang tot alle parkfaciliteiten.',
  faciliteiten: [
    'Verwarmd buitenzwembad',
    'Restaurant en snackbar',
    'Fiets- en e-bikeverhuur',
    'Grote indoorspeeltuin',
    'Minigolf',
    'Supermarkt op het park',
  ],
}

export const omgeving = [
  {
    titel:        'Edese bos',
    beschrijving: 'Op 100 meter van de lodge. Ideaal voor een ochtendwandeling of een avondwandeling in de schemering.',
    afstand:      '100m',
  },
  {
    titel:        'Nationaal Park De Hoge Veluwe',
    beschrijving: 'Met het Kröller-Müller Museum en honderden kilometers fiets- en wandelpad.',
    afstand:      '± 20 min rijden',
  },
  {
    titel:        'Ede centrum',
    beschrijving: 'Gezellige winkelstraat met lokale winkels, terrassen en restaurants.',
    afstand:      '± 10 min rijden',
  },
  {
    titel:        'Arnhem',
    beschrijving: 'Historische stad met musea, restaurants en het GelreDome.',
    afstand:      '± 25 min rijden',
  },
]

export const contact = {
  introTekst:  'Heb je een vraag? Stuur een bericht en Danny reageert zo snel mogelijk.',
  velden: {
    naam:      'Jouw naam',
    email:     'E-mailadres',
    bericht:   'Jouw bericht',
    verzenden: 'Verstuur bericht',
  },
  successTekst: 'Bedankt! We nemen zo snel mogelijk contact met je op.',
  errorTekst:   'Er ging iets mis. Probeer het opnieuw of stuur een e-mail.',
}

export const galerij = [
  // src = full size (lightbox), thumb = 800px version in thumbs/ (grid)
  { src: '/images/gallery/ext-lodge.webp',    thumb: '/images/gallery/thumbs/ext-lodge.webp',    alt: 'Wellness lodge Veluwe van buiten' },
  { src: '/images/gallery/hottub.webp',        thumb: '/images/gallery/thumbs/hottub.webp',        alt: 'Privé hottub wellness lodge Veluwe' },
  { src: '/images/gallery/sauna.webp',         thumb: '/images/gallery/thumbs/sauna.webp',         alt: 'Privé sauna voor 4 personen' },
  { src: '/images/gallery/sauna-int.webp',     thumb: '/images/gallery/thumbs/sauna-int.webp',     alt: 'Interieur privé sauna wellness lodge Veluwe' },
  { src: '/images/gallery/woonkamer.webp',     thumb: '/images/gallery/thumbs/woonkamer.webp',     alt: 'Woonkamer wellness lodge' },
  { src: '/images/gallery/slaapkamer-1.webp', thumb: '/images/gallery/thumbs/slaapkamer-1.webp',  alt: 'Slaapkamer 1 met boxspring' },
  { src: '/images/gallery/slaapkamer-2.webp', thumb: '/images/gallery/thumbs/slaapkamer-2.webp',  alt: 'Slaapkamer 2' },
  { src: '/images/gallery/keuken.webp',        thumb: '/images/gallery/thumbs/keuken.webp',        alt: 'Volledig ingerichte keuken' },
  { src: '/images/gallery/tuin.webp',          thumb: '/images/gallery/thumbs/tuin.webp',          alt: 'Omheinde tuin wellness lodge Veluwe' },
  { src: '/images/gallery/badkamer.webp',      thumb: '/images/gallery/thumbs/badkamer.webp',      alt: 'Badkamer met douche' },
  { src: '/images/gallery/bos.webp',           thumb: '/images/gallery/thumbs/bos.webp',           alt: 'Edese bos vlakbij wellness lodge' },
]
