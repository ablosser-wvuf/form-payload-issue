'use client'

import { useEffect, useRef } from 'react'

interface PulseEmbedProps {
  id: string
  token: string
  layout?: 'ban' | 'card' | 'default'
  data?: Record<string, unknown>
  className?: string
  username?: string
}

export function PulseEmbed({
                             id,
                             data,
                             token,
                             layout = 'ban',
                             username = 'ablosser@wvuf.org',
                           }: PulseEmbedProps) {
  console.log('🤖 PulseEmbed - Component Rendering:', { id, data, username })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initPulseWidget = async () => {
      console.log('🤖 Starting Pulse widget initialization')
      try {
        if (!containerRef.current) {
          console.error('🤖 Container ref is not available')
          return
        }

        // Generate JWT token
        console.log('🤖 Generating JWT token for user:', username)
        console.log('🤖 JWT token generated:', token.substring(0, 20) + '...')

        // Initialize the widget using Tableau Pulse API
        console.log('🤖 Initializing Tableau Pulse API')
        const tableauPulse = document.createElement('tableau-pulse')
        tableauPulse.setAttribute(
          'src',
          `https://us-east-1.online.tableau.com/pulse/site/wvuf/metrics/${id}`,
        )
        tableauPulse.setAttribute('disableExploreFilter', 'true')
        tableauPulse.setAttribute('layout', layout)
        tableauPulse.setAttribute('token', token)

        // Clear previous content
        console.log('🤖 Clearing previous content from container')
        containerRef.current.innerHTML = ''

        // Add styles and mount widget
        console.log('🤖 Adding styles and mounting widget')
        containerRef.current.appendChild(tableauPulse)

        console.log('🤖 Widget mounted successfully')
      } catch (error) {
        console.error('🤖 Pulse widget initialization error:', error)
      }
    }

    initPulseWidget()
  }, [id, data, username])

  let classname = ''

  switch (layout) {
    case 'ban':
      classname = 'pulse-ban col-span-2 row-span-1'
      break

    case 'card':
      classname = 'pulse-card col-span-3 row-span-2'
      break

    case 'default':
      classname = 'pulse-default col-span-6 row-span-6'
      break
  }

  return <div ref={containerRef} className={classname} />
}
