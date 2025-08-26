import React from 'react'
import logo from '../assets/placeholder.svg'
import { useI18n } from './i18n'

export function Header() {
  const { t, toggle } = useI18n()

  const [dark, setDark] = React.useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-2 font-extrabold">
          <img src={`${import.meta.env.BASE_URL}placeholder.svg`} alt="Logo" />
          <span>Tran Duc Dung</span>
        </div>
        <nav className="flex flex-wrap items-center gap-2" aria-label="Primary">
          <button className="btn btn-small" onClick={() => toggle()}>日本語</button>
          <button className="btn btn-small" aria-pressed={dark} onClick={() => setDark(d => !d)}>🌗</button>
          <a className="btn btn-small" href="#projects">{t('nav.projects')}</a>
          <a className="btn btn-small" href="#skills">{t('nav.skills')}</a>
          <a className="btn btn-small" href="#about">{t('nav.about')}</a>
          <a className="btn btn-small" href="#contact">{t('nav.contact')}</a>
        </nav>
      </div>
    </header>
  )
}
