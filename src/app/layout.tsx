import './globals.css'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { checkEnvVars } from '@/utils/supabase/check-env-vars'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { createServerClient } from '@/utils/supabase/server'
import { AuthButton } from '@/components/header-auth'
import { EnvVarWarning } from '@/components/env-var-warning'
import { ReactNode } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Collaborative Coding Platform',
  description: 'Real-time code, plugins, AI, and collaborative education tools.',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const envVarsChecked = checkEnvVars()
  let userId: string | undefined
  let theme: string = 'system'

  if (envVarsChecked) {
    try {
      const supabase = createServerClient()
      const { data: { user } } = await supabase.auth.getUser()
      userId = user?.id
      if (userId) {
        // Try fetch persisted theme
        const { data } = await supabase.from('user_settings').select('theme').eq('user_id', userId).single()
        if (data?.theme) {
          theme = data.theme
        }
      }
    } catch (e) {
      // Ignore
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark transition-theme min-h-screen`}
        data-theme={theme}
      >
        {!envVarsChecked && <EnvVarWarning />}
        <header className="flex items-center justify-between px-6 py-4 shadow bg-surface-light dark:bg-surface-dark sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-xl tracking-tight text-primary-dark dark:text-primary-light">
              CoCode
            </Link>
            <nav>
              <Link href="/instruments" className="text-sm font-medium px-2 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light">Instruments</Link>
              <Link href="/protected" className="text-sm font-medium px-2 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light">Protected</Link>
              {/* Append other nav items here */}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher userId={userId} />
            <AuthButton />
          </div>
        </header>
        <main className="flex flex-col flex-1 w-full min-h-[calc(100vh-64px)]">{children}</main>
        <footer className="py-6 text-center text-xs text-gray-400 dark:text-gray-600">
          &copy; {new Date().getFullYear()} CoCode - Built with Next.js, Supabase, and ❤️
        </footer>
      </body>
    </html>
  )
}
