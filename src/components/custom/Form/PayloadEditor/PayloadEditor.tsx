'use client'

import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useField } from '@payloadcms/ui'
import ReactQueryProvider from '@/lib/providers/ReactQuery'
import { NextThemesProvider } from '@/lib/providers/NextThemes'
import { replaceAnchorTagsWithButtons } from '@/lib/utilities/replaceElement'

interface PayloadEditorProps {
  path: string
  initialValue?: string
  onChange?: (value: string) => void
}

// Default starter form structure
const defaultStarterForm = {
  version: '1',
  tooltipType: 'RsTooltip',
  errorType: 'RsErrorMessage',
  form: {
    key: 'Screen',
    type: 'Screen',
    props: {
      title: 'New Form',
    },
    children: [],
  },
  localization: {},
  languages: [
    {
      code: 'en',
      dialect: 'US',
      name: 'English',
      description: 'American English',
      bidi: 'ltr',
    },
  ],
  defaultLanguage: 'en-US',
}

// Dynamically import FormEngine with SSR disabled
const FormEngine = dynamic(
  () => import('@/components/custom/Form/FormEngine/FormEngine').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="p-4 text-center">Loading Form Editor...</div>,
  },
)

export const PayloadEditor = ({ path }: PayloadEditorProps) => {
  const { value, setValue } = useField({ path })

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const observer = new MutationObserver((mutations) => {
      // Clear any pending timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      // Set a new timeout to process changes
      timeoutId = setTimeout(() => {
        const formEngineElement = document.querySelector('.formengine')
        if (!formEngineElement) return

        // Only look for unprocessed anchor buttons
        const anchorButtons = formEngineElement.querySelectorAll(
          'a[role="button"]:not([data-buttonized])',
        )
        if (anchorButtons.length > 0) {
          console.log('Found new anchor buttons to process:', anchorButtons.length)
          replaceAnchorTagsWithButtons(formEngineElement as HTMLElement)
        }
      }, 100) // Debounce for 100ms
    })

    // Start observing with a more focused configuration
    const config = {
      childList: true,
      subtree: true,
    }

    const container = document.querySelector('.formengine')
    if (container) {
      observer.observe(container, config)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      observer.disconnect()
    }
  }, []) // Empty dependency array since we want this to run once on mount

  // Handle form changes
  const handleChange = (newValue: any) => {
    try {
      if (newValue !== value) {
        setValue(newValue)
      }
    } catch (err) {
      console.error('Error processing form value:', err)
    }
  }

  return (
    <ReactQueryProvider>
      <div className=" field-type form-editor">
        <div className=" formengine w-full min-h-[500px] border rounded-md bg-white">
          <FormEngine formData={value} onFormChange={handleChange} />
        </div>
      </div>
    </ReactQueryProvider>
  )
}

export default PayloadEditor
