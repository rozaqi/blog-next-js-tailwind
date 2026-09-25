import glob from 'fast-glob'
import { promises as fs } from 'fs'
import * as path from 'path'

const ARTICLES_DIR = path.join(process.cwd(), 'src/pages/articles')
const WORDS_PER_MINUTE = 200

async function getReadingTime(articleFilename) {
  let source = await fs.readFile(path.join(ARTICLES_DIR, articleFilename), 'utf8')
  // Only count the article body (everything after the default export line)
  let body = source.split(/^export default .*$/m).pop()
  let words = body.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    readingTime: await getReadingTime(articleFilename),
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: ARTICLES_DIR,
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
