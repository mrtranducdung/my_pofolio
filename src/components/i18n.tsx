import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Dict = Record<string, string>
type Locale = 'en' | 'ja'

const dictionaries: Record<Locale, Dict> = {
  en: {
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Building useful software, thoughtfully.',
    'hero.subtitle': 'Software engineer at Ficha Inc. I design and ship modern web apps, agents, and tools.',
    'hero.cta_primary': 'See my work',
    'hero.cta_secondary': 'Get in touch',
    'projects.title': 'Featured Projects',
    'projects.rag.desc': 'A retrieval-augmented tutor that teaches Python with examples and quizzes.',
    'projects.edif.desc': 'Programmatic editor for .edf schematic files (insert components, merge nets).',
    'projects.agent.desc': 'A GitHub PR bot that runs Lighthouse, fixes images, and syncs content.',
    'skills.title': 'Skills',
    'about.title': 'About',
    'about.body': "I'm a software engineer who loves building practical tools. I focus on clean architecture, great UX, and reliable automation.",
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send'
  },
  ja: {
    'nav.projects': 'プロジェクト',
    'nav.skills': 'スキル',
    'nav.about': '概要',
    'nav.contact': '連絡先',
    'hero.title': '役立つソフトウェアを、丁寧に作ります。',
    'hero.subtitle': 'Ficha Inc. のソフトウェアエンジニア。Webアプリ、エージェント、ツールを設計・開発しています。',
    'hero.cta_primary': '制作物を見る',
    'hero.cta_secondary': '問い合わせる',
    'projects.title': '注目のプロジェクト',
    'projects.rag.desc': 'Python を例題とクイズで教える、検索拡張（RAG）のチューター。',
    'projects.edif.desc': '.edf 回路図ファイルを操作するプログラム（部品挿入、ネット統合）。',
    'projects.agent.desc': 'Lighthouse を実行し、画像を最適化し、コンテンツを同期する GitHub PR ボット。',
    'skills.title': 'スキル',
    'about.title': '自己紹介',
    'about.body': '実用的なツールを作るのが好きです。クリーンアーキテクチャ、良い UX、信頼できる自動化を重視しています。',
    'contact.title': 'お問い合わせ',
    'contact.name': 'お名前',
    'contact.email': 'メール',
    'contact.message': 'メッセージ',
    'contact.submit': '送信'
  }
}

type I18nCtx = {
  t: (key: string) => string
  locale: Locale
  toggle: () => void
}

const Ctx = createContext<I18nCtx | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('locale') as Locale) || 'en')
  useEffect(() => { document.documentElement.lang = locale }, [locale])
  const t = (key: string) => dictionaries[locale][key] ?? key
  const toggle = () => setLocale(prev => {
    const next = prev === 'en' ? 'ja' : 'en'
    localStorage.setItem('locale', next)
    return next
  })
  const value = useMemo(() => ({ t, locale, toggle }), [locale])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
