import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import FluidOrb from '@/components/FluidOrb'
import Pagination from '@/components/Pagination'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { useEffect, useRef, useState } from 'react'

const TOPICS = [
  'Linux Administration',
  'Cloud Infrastructure',
  'Proxmox & VMware',
  'OpenStack & CloudStack',
  'Storage & Ceph',
  'Incident Troubleshooting',
  'Prometheus & Grafana',
  'Bash & Python Scripting',
]

const ARTICLES_PER_PAGE = 3

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow
        as="p"
        decorate
        className="dark:text-zinc-400"
      >
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        {article.readingTime && (
          <>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>{article.readingTime} min read</span>
          </>
        )}
      </Card.Eyebrow>
      <Card.Description className="dark:text-zinc-400">
        {article.description}
      </Card.Description>
      {article.tags?.length > 0 && (
        <ul aria-label="Tags" className="relative z-10 mt-3 flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <li
              key={tag}
              className="inline-flex rounded-md bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-500/10 dark:text-teal-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function TagIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.5 9.5a2.25 2.25 0 0 0 3.182 0l4.318-4.318a2.25 2.25 0 0 0 0-3.182l-9.5-9.5A2.25 2.25 0 0 0 9.568 3Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <circle cx="7.5" cy="7.5" r="1.5" className="fill-zinc-400 dark:fill-zinc-500" />
    </svg>
  )
}

function TopicFilter({ topics, counts, total, active, onChange, className }) {
  let chip =
    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition'
  let idle =
    'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:bg-zinc-700'
  let selected =
    'border-teal-500 bg-teal-500 text-white dark:border-teal-400 dark:bg-teal-400 dark:text-zinc-900'
  let disabled =
    'cursor-not-allowed border-dashed border-zinc-200 bg-transparent text-zinc-400 dark:border-zinc-700/80 dark:text-zinc-500'

  return (
    <div className={className}>
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <TagIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Filter by topic</span>
      </h2>
      <div role="group" aria-label="Filter articles by topic" className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={active === null}
          onClick={() => onChange(null)}
          className={clsx(chip, active === null ? selected : idle)}
        >
          All
          <span className="opacity-70">{total}</span>
        </button>
        {topics.map((topic) => {
          let count = counts[topic] ?? 0
          let isActive = active === topic
          return (
            <button
              key={topic}
              type="button"
              aria-pressed={isActive}
              disabled={count === 0}
              title={count === 0 ? 'No articles on this topic yet' : undefined}
              onClick={() => onChange(isActive ? null : topic)}
              className={clsx(chip, count === 0 ? disabled : isActive ? selected : idle)}
            >
              {topic}
              {count > 0 && <span className="opacity-70">{count}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function useMediaQuery(query) {
  let [matches, setMatches] = useState(false)

  useEffect(() => {
    let mql = window.matchMedia(query)
    let update = () => setMatches(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [query])

  return matches
}

export default function Blog({ data = [] }) {
  let [topic, setTopic] = useState(null)
  let [page, setPage] = useState(0)
  let listRef = useRef(null)
  // WebGL orb is decorative: only mount it on sm+ screens, never on phones
  let showOrb = useMediaQuery('(min-width: 640px)')

  let counts = {}
  for (let article of data) {
    for (let tag of article.tags ?? []) {
      counts[tag] = (counts[tag] ?? 0) + 1
    }
  }
  let topics = [...TOPICS, ...Object.keys(counts).filter((t) => !TOPICS.includes(t))]

  let filtered = topic ? data.filter((a) => a.tags?.includes(topic)) : data
  let totalPage = Math.ceil(filtered.length / ARTICLES_PER_PAGE)
  let visible = filtered.slice(
    page * ARTICLES_PER_PAGE,
    (page + 1) * ARTICLES_PER_PAGE
  )

  function changeTopic(next) {
    setTopic(next)
    setPage(0)
  }

  let filterProps = {
    topics,
    counts,
    total: data.length,
    active: topic,
    onChange: changeTopic,
  }

  function changePage(next) {
    setPage(next)
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Head>
        <title>Blog – Abdul Rozaqi Wildan</title>
        <meta
          name="description"
          content="Articles and writing on Linux, Cloud Platforms, Virtualization, and Systems Operations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-9">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Writing on Linux, Cloud Infrastructure & Operations.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Thoughts, technical guides, and architectural notes from managing production systems, virtualization platforms, and enterprise cloud operations.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/rozaqi"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/abdul-rozaqi-wildan-3196211a6/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="hidden items-center justify-center sm:flex lg:justify-start"
          >
            <div className="relative flex h-[140px] w-[140px] items-center justify-center">
              {/* Subtle ambient teal glow around the orb */}
              <div className="pointer-events-none absolute -inset-3 rounded-full bg-teal-500/20 blur-xl dark:bg-teal-400/20" />
              {showOrb && (
                <FluidOrb size={140} color="#14b8a6" className="relative shadow-lg" />
              )}
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-16 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div ref={listRef} className="scroll-mt-24">
            {/* Phones/tablets: filter sits above the list */}
            <TopicFilter
              {...filterProps}
              className="mb-12 lg:hidden"
            />
            <div className="flex flex-col gap-16">
              {visible.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
              {visible.length === 0 && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  No articles on this topic yet.
                </p>
              )}
            </div>
            <Pagination page={page} totalPage={totalPage} onChange={changePage} />
          </div>
          {/* Desktop: sticky sidebar with topic filter */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start lg:pl-16 xl:pl-24">
            <TopicFilter
              {...filterProps}
              className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
            />
          </aside>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      data: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
