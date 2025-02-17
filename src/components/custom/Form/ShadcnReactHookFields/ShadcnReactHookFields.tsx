import React, { Fragment } from 'react'

import { FormElementArr, FormInputTypes } from '@/lib/types/shadcnReactHookFields'
import { Control, FieldValues } from 'react-hook-form'
import TextInput from '@/components/custom/Form/ShadcnReactHookFields/Fields/TextInput/TextInput'
import DateInput from '@/components/custom/Form/ShadcnReactHookFields/Fields/DateInput/DateInput'
import Select from '@/components/custom/Form/ShadcnReactHookFields/Fields/Select/Select'
import Checkbox from '@/components/custom/Form/ShadcnReactHookFields/Fields/Checkbox/Checkbox'
import Radio from '@/components/custom/Form/ShadcnReactHookFields/Fields/Radio/Radio'
import Checkboxes from '@/components/custom/Form/ShadcnReactHookFields/Fields/Checkboxes/Checkboxes'
import TextArea from '@/components/custom/Form/ShadcnReactHookFields/Fields/TextArea/TextArea'

/**
 * Renders a set of fields using shadcn input fields.
 */
type FormFieldsProps<T extends FieldValues = FieldValues, TContext = any> = {
  fields: FormElementArr
  formControl: Control<T>
}

function ShadcnReactHookFields<T extends FieldValues>({ fields, formControl }: FormFieldsProps<T>) {
  return (
    <>
      {fields.map((formField, index) => {
        let formFieldComponent: React.ReactNode

        switch (formField.type) {
          case FormInputTypes.text:
            formFieldComponent = <TextInput control={formControl} textInputField={formField} />
            break

          case FormInputTypes.date:
            formFieldComponent = <DateInput control={formControl} dateInputField={formField} />
            break

          case FormInputTypes.select:
            formFieldComponent = <Select control={formControl} selectInputField={formField} />
            break

          case FormInputTypes.checkbox:
            formFieldComponent = <Checkbox control={formControl} checkboxInputField={formField} />
            break

          case FormInputTypes.checkboxes:
            formFieldComponent = (
              <Checkboxes control={formControl} checkboxesInputField={formField} />
            )
            break

          case FormInputTypes.radio:
            formFieldComponent = <Radio control={formControl} radioInputField={formField} />
            break

          case FormInputTypes.textarea:
            formFieldComponent = <TextArea control={formControl} textareaInputField={formField} />

            break

          default:
            formFieldComponent = <>something went wrong, check the FormField.tsx file</> //this should never trigger...
            break
        }

        return <Fragment key={formField.name}>{formFieldComponent}</Fragment>
      })}
    </>
  )
}

export default ShadcnReactHookFields
