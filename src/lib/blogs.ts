import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const blogsDir = path.join(process.cwd(), 'public', 'blogs')

export type BlogMeta = {
  slug: string
  title: string
  description: string
  date: string
}

export type BlogPost = BlogMeta & {
  contentHtml: string
}

export function getAllBlogMeta(): BlogMeta[] {
  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'))
  return files.map(filename => {
    const raw = fs.readFileSync(path.join(blogsDir, filename), 'utf-8')
    const { data } = matter(raw)
    return {
      slug:        data.slug as string,
      title:       data.title as string,
      description: data.description as string,
      date:        data.date as string,
    }
  })
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'))
  for (const filename of files) {
    const raw = fs.readFileSync(path.join(blogsDir, filename), 'utf-8')
    const { data, content } = matter(raw)
    if (data.slug === slug) {
      return {
        slug:        data.slug as string,
        title:       data.title as string,
        description: data.description as string,
        date:        data.date as string,
        contentHtml: marked(content) as string,
      }
    }
  }
  return null
}
