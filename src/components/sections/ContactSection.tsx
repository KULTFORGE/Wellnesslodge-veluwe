'use client'
import { useState } from 'react'
import { contact } from '@/data/content'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as any).toString(),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="max-w-xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-4"
          data-aos="fade-up"
        >
          Neem contact op
        </h2>
        <p
          className="text-stone text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {contact.introTekst}
        </p>

        {status === 'success' ? (
          <div className="bg-moss/10 border border-moss/30 rounded-xl p-8 text-center text-forest font-serif text-lg">
            {contact.successTekst}
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            data-aos="fade-up"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="text-stone text-sm mb-1 block">{contact.velden.naam}</label>
              <input
                type="text"
                name="naam"
                required
                className="input input-bordered w-full bg-sand border-stone/30 text-earth focus:border-moss focus:outline-none"
              />
            </div>

            <div>
              <label className="text-stone text-sm mb-1 block">{contact.velden.email}</label>
              <input
                type="email"
                name="email"
                required
                className="input input-bordered w-full bg-sand border-stone/30 text-earth focus:border-moss focus:outline-none"
              />
            </div>

            <div>
              <label className="text-stone text-sm mb-1 block">{contact.velden.bericht}</label>
              <textarea
                name="bericht"
                required
                rows={5}
                className="textarea textarea-bordered w-full bg-sand border-stone/30 text-earth focus:border-moss focus:outline-none resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-700 text-sm">{contact.errorTekst}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn bg-amber text-cream border-0 hover:bg-amber/90 disabled:opacity-50"
            >
              {status === 'sending' ? 'Versturen...' : contact.velden.verzenden}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
