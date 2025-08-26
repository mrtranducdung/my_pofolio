import React from 'react'
import { useI18n } from './i18n'

export function Contact() {
  const { t } = useI18n()
  return (
    <section id="contact" className="section container">
      <h2 className="section-title">{t('contact.title')}</h2>
      <form className="grid gap-3 max-w-xl" action="https://formspree.io/f/xyyvlkzz" method="POST">
        <div className="grid gap-1">
          <label htmlFor="name">{t('contact.name')}</label>
          <input id="name" name="name" required className="rounded-xl border border-slate-300 bg-white/90 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-[var(--ring)] focus:border-indigo-600" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email">{t('contact.email')}</label>
          <input id="email" name="email" type="email" required className="rounded-xl border border-slate-300 bg-white/90 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-[var(--ring)] focus:border-indigo-600" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea id="message" name="message" rows={5} required className="rounded-xl border border-slate-300 bg-white/90 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-[var(--ring)] focus:border-indigo-600"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">{t('contact.submit')}</button>
      </form>
      <p className="muted mt-2">Replace the Formspree URL with your own endpoint if desired.</p>
    </section>
  )
}
