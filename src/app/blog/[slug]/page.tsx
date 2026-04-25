import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogMeta, getBlogBySlug } from '@/lib/blogs'
import { meta } from '@/data/content'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllBlogMeta().map(blog => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return {}
  return {
    title: `${blog.title} | Wellnesslodge Veluwe`,
    description: blog.description,
    alternates: { canonical: `https://wellnesslodge-veluwe.nl/blog/${blog.slug}/` },
    openGraph: {
      title: blog.title,
      description: blog.description,
      locale: 'nl_NL',
      type: 'article',
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) notFound()

  const formattedDate = new Date(blog.date).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main>
      {/* Hero header */}
      <div className="bg-forest pt-32 pb-16 md:pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-1 text-cream/60 hover:text-cream text-sm transition-colors mb-8"
          >
            ← Terug naar blog
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl text-cream leading-tight mb-4">
            {blog.title}
          </h1>
          <p className="text-cream/60 text-sm">{formattedDate}</p>
        </div>
      </div>

      {/* Blog content */}
      <article className="bg-sand py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          />
        </div>
      </article>

      {/* CTA */}
      <div className="bg-cream py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-forest mb-4">
            Klaar voor een weekend Veluwe?
          </h2>
          <p className="text-stone mb-8">
            Privé sauna, hottub en omheinde tuin — 100 meter van het Edese bos.
          </p>
          <a
            href={meta.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber text-cream px-8 py-3 rounded-lg font-medium hover:bg-amber/90 transition-colors"
          >
            Bekijk beschikbaarheid
          </a>
        </div>
      </div>
    </main>
  )
}
