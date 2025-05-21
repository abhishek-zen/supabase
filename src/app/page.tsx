import Image from 'next/image'
import Link from 'next/link'
import { CollaborationTools } from '@/components/ui/collaboration-tools'
import { EducationTools } from '@/components/ui/education-tools'
import { PluginManager } from '@/components/ui/plugin-manager'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-primary-light via-background-light to-secondary-light dark:from-primary-dark dark:via-background-dark dark:to-secondary-dark">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl px-6 py-16">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary-dark dark:text-primary-light mb-4">
            Collaborate. Code. Create.
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-2">
            Real-time coding, live education, AI code completion, and plugins – all in one place.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/session/start?type=solo" className="rounded-lg px-5 py-3 bg-primary-dark text-white font-semibold shadow hover:bg-primary-light transition-colors">
              One-Click Solo Coding Session
            </Link>
            <Link href="/session/start?type=group" className="rounded-lg px-5 py-3 bg-secondary-dark text-white font-semibold shadow hover:bg-secondary-light transition-colors">
              Start Collaborative Group Session
            </Link>
            <span className="text-xs mt-2 text-gray-400 dark:text-gray-500">No signup required for instant onboarding.</span>
          </div>
          <div className="flex flex-row gap-4 mt-6">
            <CollaborationTools />
            <EducationTools />
            <PluginManager />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Collaborative coding illustration"
            width={480}
            height={320}
            unoptimized
            className="rounded-xl shadow-lg border border-surface-light dark:border-surface-dark"
            priority
          />
          <div className="flex gap-3 mt-4">
            <span className="inline-flex items-center px-3 py-1 bg-accent-light dark:bg-accent-dark text-accent-dark dark:text-accent-light rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
              AI Completion
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-secondary-light dark:bg-secondary-dark text-secondary-dark dark:text-secondary-light rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
              Plugins
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
              Education
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
