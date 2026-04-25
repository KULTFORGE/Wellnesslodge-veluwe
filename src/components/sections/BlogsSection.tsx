import Link from 'next/link'
import { getAllBlogMeta } from '@/lib/blogs'
import { ArrowRight } from 'lucide-react'

export default function BlogsSection() {
  const blogs = getAllBlogMeta()

  return (
    <section id="blog" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">
            Inspiratie & tips
          </h2>
          <p className="text-stone max-w-xl mx-auto">
            Alles wat je wilt weten over een wellness weekend op de Veluwe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}/`}
              className="group bg-sand rounded-2xl p-8 border border-stone/10 hover:border-moss/30 hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3 className="font-serif text-xl text-forest mb-3 leading-snug group-hover:text-moss transition-colors">
                {blog.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed mb-6 line-clamp-3">
                {blog.description}
              </p>
              <span className="inline-flex items-center gap-1 text-moss text-sm font-medium">
                Lees meer <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
