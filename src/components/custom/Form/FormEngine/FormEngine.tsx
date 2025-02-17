'use client'

import React, { useRef } from 'react'
import {
  type CustomizationMap,
  BuilderView,
  FormBuilder,
  IFormBuilder,
} from '@react-form-builder/designer'
import { rSuiteComponents } from '@react-form-builder/components-rsuite'

const toolbarCustomization: CustomizationMap = {
  MainMenu_Dropdown: {
    hidden: true,
  },
  ToggleThemeButton: {
    hidden: true,
  },
  LocalizationSelect: {
    hidden: true,
  },
  Forms_Tab: {
    hidden: true,
  },
  Header_Toolbar: {
    hidden: true,
  },
  LabeledProperty: {
    style: ` 
    
    `,
  },
}
const customComponentList: any[] = [

]

const components = rSuiteComponents.map((c) => c.build())
const customComponents = customComponentList.map((c) => c.build())

const builderView = new BuilderView([...components, ...customComponents])

interface FormEngineProps {
  formData?: any
  onFormChange?: (value: any) => void
}

const BypassForm = `{
  "version": "1",
  "form": {
    "key": "Screen",
    "type": "Screen",
    "props": {}
  },
  "localization": {},
  "languages": [
    {
      "code": "en",
      "dialect": "US",
      "name": "English",
      "description": "American English",
      "bidi": "ltr"
    }
  ],
  "defaultLanguage": "en-US"
}`

const emptyForm = {
  version: '1',
  form: {
    key: 'Screen',
    type: 'Screen',
    props: {},
    children: [
      {
        key: 'rsHeader1',
        type: 'RsHeader',
        props: {
          content: {
            value: 'Blank Form ',
          },
        },
      },
    ],
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

export default function FormEngine({ formData, onFormChange }: FormEngineProps) {
  const builderRef = useRef<IFormBuilder | null>(null)

  const formStorage = {
    getFormNames: async () => {
      return ['editor']
    },
    getForm: async (name: string) => {
      console.log('GET FORM', name)
      return formData || JSON.stringify(emptyForm)
    },
    saveForm: async (name: string, form: string) => {
      if (form === BypassForm) {
        console.log('Bypassing form change')
      } else {
        onFormChange?.(form)
      }
      // onFormChange?.(form)
      return true
    },
    removeForm: async (name: string) => {
      return true
    },
  }
  formStorage.getForm('editor')

  return (
    <div className="formengine">
      <FormBuilder
        customization={toolbarCustomization}
        licenseKey={process.env.NEXT_PUBLIC_FORMENGINE_KEY}
        view={builderView}
        formName="editor"
        builderRef={(builder) => {
          builderRef.current = builder
          if (builder) {
            console.log('FormEngine editor loaded')
            const formEngineElement = document.querySelector('.formengine') as HTMLElement
            if (formEngineElement) {
              //  replaceAnchorTagsWithButtons(formEngineElement)
            }
          }
        }}
        onFormSchemaChange={(schema) => {
          formStorage.saveForm('editor', schema)
        }}
        getForm={() => {
          return formStorage.getForm('editor')
        }}
        formStorage={formStorage}
      />
    </div>
  )
}
