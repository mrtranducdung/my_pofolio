import React from 'react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-8 mt-6">
      <div className="container text-center">
        <p>&copy; <span id="year">{new Date().getFullYear()}</span> Tran Duc Dung. All rights reserved.</p>
      </div>
    </footer>
  )
}
