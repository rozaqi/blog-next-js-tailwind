import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/foto.jpg'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
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

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CheckBadgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function TechBadge({ children, color = 'teal' }) {
  return (
    <span className="mx-1 inline-flex items-center gap-1 rounded-md border border-dashed border-zinc-300 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-800 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-zinc-600 sm:text-sm">
      <span className={clsx('h-1.5 w-1.5 rounded-full', {
        'bg-teal-500': color === 'teal',
        'bg-amber-500': color === 'amber',
        'bg-sky-500': color === 'sky',
        'bg-indigo-500': color === 'indigo',
        'bg-emerald-500': color === 'emerald',
        'bg-rose-500': color === 'rose',
      })} />
      {children}
    </span>
  )
}

const experiences = [
  {
    period: 'Jan 2023 — Present',
    role: 'Systems Operations Engineer',
    company: 'PT. Biznet Gio Cloud',
    description:
      'Responsible for production cloud infrastructure management, enterprise virtualization platforms, Ceph storage clusters, capacity planning, and critical incident resolution across multi-tenant environments.',
    tags: ['OpenStack', 'Apache CloudStack', 'VMware', 'KVM', 'Ceph', 'Monitoring'],
  },
  {
    period: 'Jan 2022 — Jan 2023',
    role: 'Cloud Operations Engineer',
    company: 'PT. Boer Technology (Btech)',
    description:
      'Operated Linux server fleets, cloud provisioning, routine maintenance automation, and client infrastructure monitoring ensuring performance optimization and uptime.',
    tags: ['Linux', 'Cloud Platforms', 'Docker', 'Bash Automation', 'DevOps'],
  },
]

const skillCategories = [
  {
    title: 'Virtualization & Cloud',
    skills: ['VMware vSphere', 'Proxmox VE', 'KVM Hypervisor', 'Apache CloudStack', 'OpenStack', 'Biznet Gio Cloud'],
  },
  {
    title: 'Storage & Linux Infrastructure',
    skills: ['Ceph Storage', 'Enterprise Storage / SAN', 'Ubuntu / Debian', 'RHEL / CentOS', 'System Hardening', 'LVM & ZFS'],
  },
  {
    title: 'Automation & Containers',
    skills: ['Docker', 'Infrastructure Automation', 'Bash Scripting', 'Ansible', 'CI/CD Pipelines', 'AI-Driven Operations'],
  },
  {
    title: 'Reliability & Operations',
    skills: ['Production Incident Handling', 'Performance Optimization', 'Capacity Planning', 'Prometheus & Grafana', 'High Availability (HA)'],
  },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About — Abdul Rozaqi Wildan</title>
        <meta
          name="description"
          content="Systems Operations Engineer specializing in Linux Infrastructure, Virtualization, Cloud Platforms, and Enterprise Storage."
        />
      </Head>
      <Container className="mt-12 sm:mt-20">
        <div className="mx-auto max-w-3xl space-y-16 sm:space-y-20">
          
          {/* Header & Bio Section (Ren Lenon inspired + Spotlight styling) */}
          <section className="space-y-8">
            <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                    Abdul Rozaqi Wildan
                  </h1>
                  <CheckBadgeIcon className="h-6 w-6 text-teal-500 dark:text-teal-400" title="Verified Professional" />
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open to Collaboration
                  </span>
                  <span>•</span>
                  <span>Bandung / Cimahi, Indonesia</span>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <Link
                    href="https://github.com/rozaqi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
                    title="GitHub"
                  >
                    <GitHubIcon className="h-5 w-5 fill-current" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/abdul-rozaqi-wildan-3196211a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="h-5 w-5 fill-current" />
                  </Link>
                  <Link
                    href="mailto:rozaqiwt@gmail.com"
                    className="text-zinc-500 transition hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
                    title="Email"
                  >
                    <MailIcon className="h-5 w-5 fill-current" />
                  </Link>
                </div>
              </div>

              {/* Profile Avatar */}
              <div className="relative shrink-0">
                <div className="h-28 w-28 overflow-hidden rounded-2xl border-2 border-zinc-200 shadow-md dark:border-zinc-700 sm:h-36 sm:w-36">
                  <Image
                    src={portraitImage}
                    alt="Abdul Rozaqi Wildan"
                    priority
                    className="h-full w-full object-cover object-center transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Headline & Bio Content */}
            <div className="space-y-5">
              <h2 className="text-xl font-normal leading-snug tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                Systems Operations Engineer{' '}
                <span className="font-light text-zinc-500 dark:text-zinc-400">
                  — Linux Infrastructure, Virtualization, Cloud Platforms & Enterprise Storage
                </span>
              </h2>

              <p className="text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                Systems Operations Engineer specializing in{' '}
                <TechBadge color="sky">Linux Infrastructure</TechBadge>,{' '}
                <TechBadge color="emerald">Virtualization</TechBadge>,{' '}
                <TechBadge color="teal">Cloud Platforms</TechBadge>, and{' '}
                <TechBadge color="amber">Enterprise Storage</TechBadge>.
                Experienced in managing production environments, troubleshooting critical incidents, capacity planning, performance optimization, and infrastructure automation.
              </p>

              <p className="text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                Hands-on with technologies including{' '}
                <TechBadge color="indigo">VMware</TechBadge>,{' '}
                <TechBadge color="amber">Proxmox</TechBadge>,{' '}
                <TechBadge color="sky">KVM</TechBadge>,{' '}
                <TechBadge color="teal">Apache CloudStack</TechBadge>,{' '}
                <TechBadge color="rose">OpenStack</TechBadge>,{' '}
                <TechBadge color="emerald">Ceph</TechBadge>,{' '}
                <TechBadge color="sky">Docker</TechBadge>, and monitoring platforms.
                Passionate about building reliable, scalable, and efficient systems while continuously exploring AI-driven operations and automation.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="mailto:rozaqiwt@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 hover:shadow dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  <MailIcon className="h-4 w-4" />
                  <span>Get in touch</span>
                </Link>
                <Link
                  href="https://github.com/rozaqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                  <GitHubIcon className="h-4 w-4 fill-current" />
                  <span>Explore GitHub</span>
                  <ArrowUpRightIcon className="h-4 w-4 text-zinc-400" />
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Focus Section (Ren's Featured Build style) */}
          <section className="overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/70 p-6 shadow-sm dark:border-zinc-700/80 dark:bg-zinc-800/30 sm:p-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
                  Featured Architecture & Focus
                </p>
                <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">
                  Production & Lab
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                Cloud Platforms, Distributed Storage & High Availability
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                Architecting, managing, and stress-testing production infrastructure and dedicated bare-metal labs: multi-node Apache CloudStack and OpenStack setups, KVM/Proxmox virtualization, Ceph distributed block & object storage, and automated failover architectures.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['VMware', 'Proxmox', 'KVM', 'CloudStack', 'OpenStack', 'Ceph', 'Docker', 'Grafana', 'AI Ops'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-2xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                Experience
              </h2>
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                Career History
              </span>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-transparent p-4 transition hover:border-zinc-200 hover:bg-zinc-50/50 dark:hover:border-zinc-800 dark:hover:bg-zinc-800/20 sm:grid sm:grid-cols-[160px_1fr] sm:gap-6"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 sm:mb-0 sm:pt-1">
                    {exp.period}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Skills & Technologies Grid */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                Technical Skills
              </h2>
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                Core Competencies
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-2xs transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-zinc-700"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                    {category.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex rounded-lg border border-dashed border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy / Quote Card */}
          <section className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-gradient-to-r from-teal-500/10 via-sky-500/5 to-transparent p-6 dark:border-teal-400/20 dark:from-teal-950/40">
              <div className="flex items-start gap-3">
                <span className="flex-none rounded-md bg-teal-500/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:bg-teal-400/20 dark:text-teal-300">
                  Philosophy
                </span>
                <blockquote className="italic text-zinc-800 dark:text-zinc-200">
                  &ldquo;Do everything with pleasure, so it doesn&apos;t burden your mind.&rdquo;
                </blockquote>
              </div>
            </div>
          </section>

        </div>
      </Container>
    </>
  )
}
