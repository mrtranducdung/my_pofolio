import React from 'react'
import { useI18n } from './i18n'

export function Hero() {
  const { t } = useI18n()
  return (
    <section className="container grid gap-8 py-10 md:grid-cols-[1.2fr,1fr] items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">{t('hero.title')}</h1>
        <p className="lead mb-4">{t('hero.subtitle')}</p>
        <div className="flex gap-3 mb-2">
          <a href="#projects" className="btn btn-primary">{t('hero.cta_primary')}</a>
          <a href="#contact" className="btn">{t('hero.cta_secondary')}</a>
        </div>
        <ul className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-400">
          <li>TypeScript • React • Next.js • Node</li>
          <li>Python • FastAPI • RAG • LLM agents</li>
          <li>EN 🇬🇧 / JA 🇯🇵</li>
        </ul>
      </div>
      <div>
        <img className="rounded-2xl shadow-xl" src="/src/assets/placeholder.svg" alt="Gradient artwork" />
      </div>
    </section>
  )
}
