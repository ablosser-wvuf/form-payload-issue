'use client'
import React, { useEffect, useRef } from 'react'
import {view} from '@react-form-builder/components-rsuite'
import {FormViewer, IFormViewer} from '@react-form-builder/core'
import { demoForm } from './demoForm'

const form = `{
  "form": {
    "key": "Screen",
    "type": "Screen",
    "props": {},
    "children": [
      {
        "key": "RsInput 1",
        "type": "RsInput",
        "props": {}
      }
    ]
  }
}`



function Viewer() {
    const ref = useRef<IFormViewer>(null)

    useEffect(() => {
        if (ref.current) {
          const formJSON = JSON.stringify(ref.current.formData)
          console.log('formJSON ', ref.current)
        }
      }, [ref.current])

      const initialData = {
        rsInput1: "Hello",
        rsInput2: "World"
      }


  return <FormViewer onFormDataChange={({data, errors}) => {
    const formJSON = JSON.stringify(data)
    console.log('onFormDataChange', formJSON)
  }} view={view} viewerRef={ref} initialData={initialData} getForm={_ => JSON.stringify(demoForm)}/>
}

export default Viewer