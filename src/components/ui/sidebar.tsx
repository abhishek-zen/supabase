import * as React from 'react'
import Link from 'next/link'
import { useMobile } from '@/hooks/use-mobile'

export function Sidebar() {
  const isMobile = useMobile()

  return (
    <aside
      className={`flex flex-col bg-surface-light dark:bg-surface-dark shadow-md h-full
        ${isMobile ? 'fixed bottom-0 left-0 right-0 flex-row justify-around p-2 rounded-t-2xl z-50' : 'w-56 min-h-screen p-6 rounded-r-2xl'}
        transition-all duration-300 ease-in-out`}
      role="navigation"
      aria-label="Main sidebar"
    >
      <Link href="/" className="mb-4 font-extrabold text-primary-dark dark:text-primary-light text-xl tracking-tight">
        CoCode
      </Link>
      <nav className={`flex flex-col gap-3 ${isMobile ? 'flex-row justify-around w-full' : ''}`}>
        <Link href="/instruments" className="py-2 px-3 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/20 font-medium text-gray-700 dark:text-gray-200 transition-colors">Instruments</Link>
        <Link href="/protected" className="py-2 px-3 rounded-lg hover:bg-secondary-light/10 dark:hover:bg-secondary-dark/20 font-medium text-gray-700 dark:text-gray-200 transition-colors">Protected</Link>
        <Link href="/plugins" className="py-2 px-3 rounded-lg hover:bg-accent-light/10 dark:hover:bg-accent-dark/20 font-medium text-gray-700 dark:text-gray-200 transition-colors">Plugins</Link>
      </nav>
    </aside>
  )
}
