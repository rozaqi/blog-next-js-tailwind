import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

import { Container } from '@/components/Container'
import avatarImage from '@/images/foto.jpg'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="block py-2.5 text-sm font-medium text-zinc-700 transition hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
      >
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-700">
        Menu
        <ChevronDownIcon className="ml-2 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-200" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Navigation
              </h2>
            </div>
            <nav className="mt-4">
              <ul className="-my-2 divide-y divide-zinc-100 text-sm dark:divide-zinc-800">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/blog">Blog</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'rounded-full px-3.5 py-1.5 text-sm font-medium transition',
          isActive
            ? 'bg-zinc-100 font-semibold text-teal-700 dark:bg-zinc-800 dark:text-teal-400'
            : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex items-center gap-1">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/blog">Blog</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function toggleMode(event) {
    const isAppearanceTransition =
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const updateDOM = () => {
      let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      let isSystemDarkMode = darkModeMediaQuery.matches
      let isDarkMode = document.documentElement.classList.toggle('dark')

      if (isDarkMode === isSystemDarkMode) {
        delete window.localStorage.isDarkMode
      } else {
        window.localStorage.isDarkMode = isDarkMode
      }
    }

    if (!isAppearanceTransition) {
      updateDOM()
      return
    }

    // Get click position (or button center if triggered by keyboard)
    const buttonRect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX && event.clientX > 0
      ? event.clientX
      : buttonRect.left + buttonRect.width / 2
    const y = event.clientY && event.clientY > 0
      ? event.clientY
      : buttonRect.top + buttonRect.height / 2

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = document.startViewTransition(() => {
      updateDOM()
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 550,
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-200 active:scale-90 hover:bg-zinc-50 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:hover:bg-zinc-700"
      onClick={toggleMode}
    >
      <SunIcon className="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition-transform duration-500 group-hover:rotate-45 group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 fill-zinc-700 stroke-zinc-400 transition-transform duration-500 group-hover:-rotate-12 dark:block dark:group-hover:stroke-zinc-200" />
    </button>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-100/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-zinc-900/10 shadow-sm transition group-hover:ring-teal-500/50 dark:ring-white/10 dark:group-hover:ring-teal-400/50">
              <Image
                src={avatarImage}
                alt="Abdul Rozaqi Wildan"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <span className="hidden text-sm font-semibold tracking-tight text-zinc-800 transition group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400 sm:inline-block">
              Abdul Rozaqi Wildan
            </span>
          </Link>

          {/* Navigation & Mode Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <DesktopNavigation className="hidden sm:block" />
            <MobileNavigation className="sm:hidden" />
            <div className="border-l border-zinc-200 pl-2 dark:border-zinc-700/60 sm:pl-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
