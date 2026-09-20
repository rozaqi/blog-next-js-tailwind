import Head from 'next/head'
import Link from 'next/link'
import { ArticlesContext } from '@/context'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
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
import { useEffect, useState } from 'react'

function MailIcon(props) {
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
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}



function Article({ article, loading }) {
  return loading ? (
    <Card as="article" className="animate-pulse">
      <Card.Title>
        <div className="rounded bg-slate-700 text-slate-700">
          Loading article...
        </div>
      </Card.Title>
      <Card.Eyebrow
        as="time"
        decorate
        className="rounded bg-slate-700 text-slate-700"
      >
        Recent
      </Card.Eyebrow>
      <Card.Description className="rounded bg-slate-700 text-slate-700">
        Loading article description and content...
      </Card.Description>
      <Card.Cta>
        <div className="rounded bg-slate-700 text-slate-700">Read article</div>
      </Card.Cta>
    </Card>
  ) : (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        decorate
        className="dark:text-zinc-500"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description className="dark:text-zinc-400">
        {article.description}
      </Card.Description>
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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
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

function FeaturedTopics() {
  let topics = [
    'Linux Administration',
    'Cloud Infrastructure',
    'Proxmox & VMware',
    'OpenStack & CloudStack',
    'Storage & Ceph',
    'Incident Troubleshooting',
    'Prometheus & Grafana',
    'Bash & Python Scripting',
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <TagIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Featured Topics</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Core technical themes and domains explored across the articles.
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {topics.map((topic) => (
          <span
            key={topic}
            className="inline-flex rounded-md border border-dashed border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/50 dark:text-zinc-300"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Blog({ data }) {
  const [articles, setArticles] = useState([])
  const [isFetch, setIsFetch] = useState(true)

  useEffect(() => {
    setArticles(data || [])
    setTimeout(() => {
      setIsFetch(false)
    }, 1000)
  }, [data])

  return (
    <>
      <Head>
        <title>Abdul Rozaqi Wildan - Systems Operations Engineer</title>
        <meta
          name="description"
          content="Articles and writing on Linux, Cloud Platforms, Virtualization, and Systems Operations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-9">
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
      </Container>
      <Container className="mt-24 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="mb-16 flex flex-col gap-16">
              {isFetch
                ? [...Array(3)].map((el, id) => (
                    <Article key={id} loading />
                  ))
                : articles.map((article) => (
                    <Article key={article.slug} article={article} />
                  ))}
            </div>
            <ArticlesContext.Provider
              value={{ articles, setArticles, isFetch }}
            >
              <Pagination />
            </ArticlesContext.Provider>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <FeaturedTopics />
          </div>
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
