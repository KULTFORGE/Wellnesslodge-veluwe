'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { meta } from '@/data/content'

const navLinks = [
  { href: '#faciliteiten', label: 'Faciliteiten' },
  { href: '#fotos',        label: "Foto's" },
  { href: '#praktisch',    label: 'Praktisch' },
  { href: '#reviews',      label: 'Reviews' },
  { href: '#faq',          label: 'FAQ' },
  { href: '#contact',      label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-forest">
          Wellnesslodge Veluwe
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-stone">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-forest transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href={meta.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm bg-amber text-cream border-0 hover:bg-amber/90"
          >
            Direct boeken
          </a>
        </nav>

        <button
          className="md:hidden text-forest p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-stone/10 px-4 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone hover:text-forest transition-colors text-base py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={meta.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-amber text-cream border-0 hover:bg-amber/90 mt-2"
          >
            Direct boeken
          </a>
        </div>
      )}
    </header>
  )
}
