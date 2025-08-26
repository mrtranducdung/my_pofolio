import React from 'react'
import { useI18n } from './i18n'

const Card: React.FC<{title: string, desc: string}> = ({ title, desc }) => (
  <article className="card overflow-hidden">
    <img src="/src/assets/placeholder.svg" alt="" className="w-full h-40 object-cover" />
    <div className="card-body">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{desc}</p>
      <div className="flex gap-2 flex-wrap">
        <span className="chip">TypeScript</span>
        <span className="chip">React</span>
        <span className="chip">Tailwind</span>
      </div>
      <div className="flex gap-2">
        <a className="btn btn-small" aria-disabled>Live</a>
        <a className="btn btn-small" aria-disabled>Code</a>
      </div>
    </div>
  </article>
)

export function Projects() {
  const { t } = useI18n()
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card title="RAG Python Tutor" desc={t('projects.rag.desc')} />
        <Card title="EDIF Manipulator" desc={t('projects.edif.desc')} />
        <Card title="Ops AI Agent" desc={t('projects.agent.desc')} />
      </div>
    </section>
  )
}
