import React from 'react'
import { useI18n } from './i18n'

export function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="section container">
      <h2 className="section-title">{t('about.title')}</h2>
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <p className="text-slate-700 dark:text-slate-300">{t('about.body')}</p>
        <ul className="space-y-2">
          <li>📍 Tokyo, Japan</li>
          <li>🏢 Ficha Inc.</li>
          <li>✉️ <a className="underline" href="mailto:dung.td@ficha.jp">dung.td@ficha.jp</a></li>
        </ul>
      </div>
    </section>
  )
}
