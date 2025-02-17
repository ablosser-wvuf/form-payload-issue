'use client'

import { useEffect, useState } from 'react'

const TABLEAU_SCRIPT_URL =
  'https://us-east-1.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'
interface ScriptLoaderState {
  status: 'idle' | 'loading' | 'loaded' | 'error'
  error?: string
}

export function TableauScriptLoader({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ScriptLoaderState>({ status: 'idle' })

  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${TABLEAU_SCRIPT_URL}"]`)

    if (existingScript) {
      if (customElements.get('tableau-viz')) {
        setState({ status: 'loaded' })
      } else {
        setState({
          status: 'error',
          error: 'tableau-viz web component not found',
        })
      }
      return
    }

    setState({ status: 'loading' })
    const script = document.createElement('script')
    script.src = TABLEAU_SCRIPT_URL
    script.async = true

    script.onload = () => {
      if (customElements.get('tableau-viz')) {
        setState({ status: 'loaded' })
      } else {
        setState({
          status: 'error',
          error: 'tableau-viz web component not found',
        })
      }
    }

    script.onerror = () => {
      setState({
        status: 'error',
        error: 'Failed to load Tableau script',
      })
    }

    document.body.appendChild(script)
  }, [])

  if (state.status === 'error') {
    return <div className="p-4 text-red-500">Error loading Tableau: {state.error}</div>
  }

  if (state.status !== 'loaded') {
    return (
      <div className="flex items-center justify-center p-4 space-x-2">
        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <span>Loading Tableau...</span>
      </div>
    )
  }

  return <>{children}</>
}
