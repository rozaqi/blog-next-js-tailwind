import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import portraitImage from '@/images/foto.jpg'

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

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
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

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.588a13.06 13.06 0 0 0 2.274 1.765c.311.192.571.337.757.433.114.06.204.103.255.127.026.012.046.02.057.025l.008.003.002.001ZM10 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ServerStackIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}

function CpuChipIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}

function CommandLineIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </svg>
  )
}

const selectedWork = [
  {
    title: 'Cloud Infrastructure Operations',
    category: 'Cloud Platform',
    icon: ServerStackIcon,
    technologies: ['Apache CloudStack', 'KVM', 'Software-Defined Networking', 'Linux'],
    description:
      'Maintaining, operating, and troubleshooting enterprise production cloud infrastructure across compute, networking, and distributed storage tiers.',
    highlights: [
      'Managing multi-tenant cloud compute environments and hypervisor host balancing.',
      'Production incident triage, VPC network diagnostics, and zero-downtime host maintenance.',
      'Collaborating on capacity expansion and proactive health verification routines.',
    ],
    tags: ['Apache CloudStack', 'KVM', 'VPC Networking', 'High Availability'],
  },
  {
    title: 'Virtualization & High Availability',
    category: 'Enterprise Virtualization',
    icon: CpuChipIcon,
    technologies: ['Proxmox VE', 'VMware vSphere', 'Ceph Storage'],
    description:
      'Operating resilient virtualization clusters with automated failover, live VM migrations, distributed Ceph storage pools, and hardware capacity planning.',
    highlights: [
      'Managing multi-node Proxmox VE & VMware vSphere hypervisor clusters.',
      'Ceph distributed storage pool health, monitor recovery, and OSD rebalancing.',
      'Disaster recovery planning, VM backup automation, and HA failover validation.',
    ],
    tags: ['Proxmox VE', 'VMware', 'Ceph Storage', 'Disaster Recovery'],
  },
  {
    title: 'Infrastructure Automation & Observability',
    category: 'Automation & Tooling',
    icon: CommandLineIcon,
    technologies: ['Python', 'Bash', 'Prometheus', 'Grafana'],
    description:
      'Developing operational automation scripts and proactive observability pipelines to eliminate repetitive operational toil and detect production anomalies early.',
    highlights: [
      'Engineered automated health check scripts and routine system verification workflows.',
      'Configured Prometheus, Alertmanager, and Grafana telemetry dashboards for infrastructure metrics.',
      'Automated log diagnostics and scheduled operational reporting routines.',
    ],
    tags: ['Python', 'Bash Scripting', 'Prometheus', 'Grafana', 'Zabbix'],
  },
]

const experiences = [
  {
    company: 'Biznet Gio Cloud (PT Biznet Gio Nusantara)',
    companyShort: 'Biznet Gio Cloud',
    role: 'System Operations Engineer',
    employmentType: 'Full-time',
    period: 'Jan 2023 - Present',
    duration: '3 yrs 9 mos',
    location: 'Central Jakarta, Jakarta, Indonesia · Hybrid',
    highlights: [
      'Managing overall Biznet GIO Hosting, CloudStack compute instances, Enterprise Email, and DNS infrastructure for internal and external users.',
      'Executing daily health checks, proactive monitoring, system patching, OS upgrades, and deep-dive root cause analysis (RCA) on production incidents.',
      'Handling critical L2/L3 escalations, infrastructure maintenance planning, and operational automation routines.',
    ],
  },
  {
    company: 'Boer Technology (Btech)',
    companyShort: 'Boer Technology (Btech)',
    role: 'Cloud Operations Engineer',
    employmentType: 'Full-time',
    period: 'Jan 2022 - Jan 2023',
    duration: '1 yr 1 mo',
    location: 'South Jakarta, Jakarta, Indonesia',
    highlights: [
      'Monitored, maintained, and troubleshot multi-node enterprise cloud platforms built on OpenStack.',
      'Provisioned and configured cloud resources across compute, block/object storage, and multi-tenant neutron networks.',
      'Handled Level 1/Level 2 incident triage, SLA maintenance, and authoring standard operational procedures (SOPs).',
    ],
  },
  {
    company: 'Boer Technology (Btech)',
    companyShort: 'Boer Technology (Btech)',
    role: 'Student Internship',
    employmentType: 'Internship',
    period: 'Aug 2021 - Dec 2021',
    duration: '5 mos',
    location: 'Bogor, West Java, Indonesia',
    highlights: [
      'Completed the DevOps learning track at Adinusa, mastering CI/CD automation, containerization, and observability.',
      'Built automated GitLab CI/CD pipelines and deployed containerized applications using Docker Compose.',
      'Configured proactive observability using Prometheus, Grafana, and ELK Stack for centralized log aggregation.',
    ],
  },
  {
    company: 'Boer Technology (Btech)',
    companyShort: 'Boer Technology (Btech)',
    role: 'Professional Intern',
    employmentType: 'Internship',
    period: 'Jun 2021 - Aug 2021',
    duration: '3 mos',
    location: 'Bogor, West Java, Indonesia',
    highlights: [
      'Completed the Cloud Engineer track at Adinusa, focusing on Linux Administration, Docker, Ansible, OpenStack, and Ceph.',
      'Migrated virtual machines from VMware ESXi hypervisors to OpenStack environments.',
      'Deployed high-availability OpenStack clusters using Kolla-Ansible with Ceph distributed storage backend.',
    ],
  },
]

const technicalCapabilities = [
  {
    title: 'Virtualization & Hypervisors',
    description:
      'Enterprise hypervisor administration, HA clustering, live VM migration, resource allocation, and cluster troubleshooting.',
    skills: ['Proxmox VE', 'VMware vSphere / ESXi', 'KVM', 'HA Clusters', 'VM Migration'],
  },
  {
    title: 'Linux Systems Engineering',
    description:
      'Linux administration, performance analysis, system troubleshooting, LVM filesystems, process inspection, and production hardening.',
    skills: ['Ubuntu / Debian', 'RHEL / CentOS', 'Systemd & Services', 'LVM & Storage', 'Security Hardening'],
  },
  {
    title: 'Cloud Infrastructure',
    description:
      'Architecture, provisioning, and operational management of enterprise private cloud platforms across compute, storage, and SDN.',
    skills: ['Apache CloudStack', 'OpenStack', 'Compute Provisioning', 'Multi-tenant SDN', 'Host Clustering'],
  },
  {
    title: 'Incident Diagnostics & RCA',
    description:
      'Root-cause analysis across kernel logs, network diagnostics, storage latency, and service bottlenecks to resolve critical production issues.',
    skills: ['Production Incidents', 'Root Cause Analysis', 'Performance Tuning', 'Network Diagnostics', 'Log Tracing'],
  },
  {
    title: 'Monitoring & Observability',
    description:
      'Deploying telemetry pipelines, proactive alerting, and performance dashboards to safeguard infrastructure availability SLAs.',
    skills: ['Prometheus', 'Grafana', 'Alertmanager', 'Zabbix', 'Metric Dashboards', 'Proactive Alerts'],
  },
  {
    title: 'Automation & Scripting',
    description:
      'Developing operational tooling with Python and Bash to eliminate repetitive toil, automate verification checks, and streamline tasks.',
    skills: ['Python', 'Bash Scripting', 'Task Automation', 'Health Verification', 'Automated Reporting'],
  },
]

export default function Home({ articles = [] }) {
  return (
    <>
      <Head>
        <title>Abdul Rozaqi Wildan - Systems Operations Engineer</title>
        <meta
          name="description"
          content="Systems Operations Engineer building reliable cloud, virtualization, and storage infrastructure for production environments."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-10 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-16 sm:space-y-20">
          
          {/* Hero Section — Sharp Positioning & Clear CTAs */}
          <section className="space-y-8">
            <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                    Abdul Rozaqi Wildan
                  </h1>
                  <CheckBadgeIcon className="h-6 w-6 text-teal-500 dark:text-teal-400" title="Verified Professional" />
                </div>
                
                <p className="text-lg font-medium text-teal-700 dark:text-teal-400 sm:text-xl">
                  Systems Operations Engineer
                </p>

                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open to Collaboration
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>

              {/* Profile Avatar */}
              <div className="relative shrink-0">
                <div className="h-28 w-28 overflow-hidden rounded-2xl border-2 border-zinc-200 shadow-md dark:border-zinc-700 sm:h-36 sm:w-36">
                  <Image
                    src={portraitImage}
                    alt="Abdul Rozaqi Wildan"
                    priority
                    sizes="(min-width: 640px) 144px, 112px"
                    className="h-full w-full object-cover object-center transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Core Value Statement & Tech Highlight */}
            <div className="space-y-4">
              <p className="text-xl font-normal leading-relaxed tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                Building reliable cloud, virtualization, and storage infrastructure at production scale.
              </p>

              <p className="text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                Experienced in Linux infrastructure, Apache CloudStack, Proxmox VE, VMware, Ceph, OpenStack, full-stack observability, and infrastructure automation. Focused on continuous uptime, incident mitigation, and operational resilience.
              </p>

              {/* Action Buttons: View Work (Primary), Read Blog (Secondary), Social Icons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 hover:shadow dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  <span>View Engineering Work</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </a>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                  <span>Read Technical Blog</span>
                  <ArrowUpRightIcon className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                </Link>

                <div className="flex items-center gap-2 pl-1 sm:pl-2">
                  <Link
                    href="https://github.com/rozaqi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:text-zinc-100"
                    title="GitHub Profile"
                  >
                    <GitHubIcon className="h-5 w-5 fill-current" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/abdul-rozaqi-wildan-3196211a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:text-zinc-100"
                    title="LinkedIn Profile"
                  >
                    <LinkedInIcon className="h-5 w-5 fill-current" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Selected Engineering Work Section */}
          <section id="work" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                Selected Engineering Work
              </h2>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                Core Domains & Projects
              </span>
            </div>

            <div className="space-y-6">
              {selectedWork.map((project, idx) => {
                let IconComponent = project.icon
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700 sm:p-7"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3.5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                              {project.title}
                            </h3>
                          </div>
                          <p className="text-xs font-medium text-teal-700 dark:text-teal-400 sm:text-sm">
                            {project.technologies.join(' · ')}
                          </p>
                        </div>
                      </div>

                      <span className="self-start rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300 sm:self-auto">
                        {project.category}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-4 space-y-2 border-t border-zinc-100 pt-4 dark:border-zinc-800/60">
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Key Engineering Highlights
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex rounded-md border border-dashed border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/50 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Experience Timeline with Highlights */}
          <section id="experience" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                Experience
              </h2>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                Career History
              </span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700 sm:p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {exp.period}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                          {exp.duration}
                        </span>
                        <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[11px] font-medium text-teal-800 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300">
                          {exp.employmentType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                    <MapPinIcon className="h-3.5 w-3.5 flex-none text-zinc-500 dark:text-zinc-400" />
                    <span>{exp.location}</span>
                  </div>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-zinc-100 pt-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400 sm:text-sm">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Technical Capabilities (Streamlined & Capability-oriented) */}
          <section id="skills" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                Technical Capabilities
              </h2>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                Core Competencies
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {technicalCapabilities.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                >
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex rounded-md border border-dashed border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/50 dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Latest Engineering Notes (Blog Section on Homepage) */}
          {articles && articles.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
                <div>
                  <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                    Latest Engineering Notes
                  </h2>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                    Thoughts, architectural notes, and production troubleshooting guides.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="hidden items-center gap-1 text-xs font-semibold text-teal-700 hover:underline dark:text-teal-400 sm:inline-flex"
                >
                  <span>View all</span>
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {articles.map((article) => (
                  <article
                    key={article.slug}
                    className="group relative rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                  >
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-900 transition group-hover:text-teal-700 dark:text-zinc-100 dark:group-hover:text-teal-400">
                        <Link href={`/articles/${article.slug}`}>
                          <span className="absolute -inset-y-2.5 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                          <span className="relative z-10">{article.title}</span>
                        </Link>
                      </h3>
                      <time
                        dateTime={article.date}
                        className="relative z-10 shrink-0 text-xs text-zinc-500 dark:text-zinc-400"
                      >
                        {formatDate(article.date)}
                      </time>
                    </div>

                    <p className="relative z-10 mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                      {article.description}
                    </p>

                    <div className="relative z-10 mt-3 flex items-center text-xs font-semibold text-teal-700 dark:text-teal-400">
                      <span>Read article</span>
                      <ArrowRightIcon className="ml-1 h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </article>
                ))}
              </div>

              <div className="pt-2 text-center sm:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline dark:text-teal-400"
                >
                  <span>Explore all articles</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </section>
          )}

          {/* Current Focus Section */}
          <section className="overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/70 p-6 shadow-sm dark:border-zinc-700/80 dark:bg-zinc-800/30 sm:p-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
                  Current Focus
                </p>
                <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300">
                  Reliability Engineering · Automation · AI-assisted Operations
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                High Availability Systems, Task Automation & Agentic AI
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                Operating as a Systems Operations Engineer committed to ensuring production infrastructure is fault-tolerant and highly available. Actively eliminating repetitive operational toil with Python and Bash automation, and exploring Agentic AI workflows to enhance diagnostic speeds, observability, and infrastructure verification.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Zero Downtime',
                  'High Availability (HA)',
                  'Python & Bash Automation',
                  'Incident Triage',
                  'Agentic AI Workflows',
                  'Proactive Observability',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Connect & Social Profiles Section */}
          <section id="connect" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                Connect
              </h2>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                Online Presence
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="https://github.com/rozaqi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition group-hover:bg-teal-50 group-hover:text-teal-700 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-teal-500/10 dark:group-hover:text-teal-400">
                    <GitHubIcon className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 transition group-hover:text-teal-700 dark:text-zinc-100 dark:group-hover:text-teal-400">
                      GitHub
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      @rozaqi • Repositories & Code
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-5 w-5 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-700 dark:text-zinc-500 dark:group-hover:text-teal-400" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/abdul-rozaqi-wildan-3196211a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition group-hover:bg-teal-50 group-hover:text-teal-700 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-teal-500/10 dark:group-hover:text-teal-400">
                    <LinkedInIcon className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 transition group-hover:text-teal-700 dark:text-zinc-100 dark:group-hover:text-teal-400">
                      LinkedIn
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Abdul Rozaqi Wildan • Network
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-5 w-5 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-700 dark:text-zinc-500 dark:group-hover:text-teal-400" />
              </Link>
            </div>
          </section>

          {/* Philosophy / Quote Card (Placed Elegantly Near Footer) */}
          <section className="space-y-6 pt-2">
            <div className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-gradient-to-r from-teal-500/10 via-sky-500/5 to-transparent p-6 dark:border-teal-400/20 dark:from-teal-950/30">
              <div className="flex items-start gap-3">
                <span className="flex-none rounded-md bg-teal-500/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:bg-teal-400/20 dark:text-teal-300">
                  Philosophy
                </span>
                <blockquote className="italic text-zinc-800 dark:text-zinc-200">
                  &ldquo;Technology never stops evolving, and neither should we. Continuous learning, hands-on experimentation, and staying curious are the foundation of engineering excellence.&rdquo;
                </blockquote>
              </div>
            </div>
          </section>

        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const allArticles = await getAllArticles()
  return {
    props: {
      articles: allArticles.slice(0, 3).map(({ component, ...meta }) => meta),
    },
  }
}

