import React from 'react'
import { useI18n } from './i18n'

export function Skills() {
  const { t } = useI18n()
  return (
    <section id="skills" className="section container">
      <h2 className="section-title">{t('skills.title')}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">Frontend</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>React, Next.js, Vite</li>
            <li>TypeScript, Zustand, TanStack Query</li>
            <li>Tailwind CSS, shadcn/ui, Storybook</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Backend</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Node, FastAPI, Postgres</li>
            <li>Auth, REST/GraphQL</li>
            <li>Testing, CI/CD</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">AI</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>RAG systems, vector DBs</li>
            <li>Agent design, tool calling</li>
            <li>Prompting, evaluation</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
