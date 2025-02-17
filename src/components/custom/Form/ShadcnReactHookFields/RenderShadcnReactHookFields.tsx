import React, { Fragment, PropsWithChildren } from 'react'

import FieldContainer from '@/components/custom/Form/ShadcnReactHookFields/FieldContainers/FieldContainer'
import ShadcnReactHookFields from '@/components/custom/Form/ShadcnReactHookFields/ShadcnReactHookFields'
import { Control, FieldValues } from 'react-hook-form'
import AccordionContainer from '@/components/custom/Form/ShadcnReactHookFields/FieldContainers/AccordionContainer'
import { FieldContainerTypes, FormFieldConfig } from '@/lib/types/formConfig'

type FormFieldRendererProps<T extends FieldValues = FieldValues, TContext = any> = {
  config: FormFieldConfig
  formControls: Control<T>
} & PropsWithChildren

/**
 * Component to render form fields. Can take a children argument that renders content at the end of the form (useful for filters and other misc things)
 */
function RenderShadcnReactHookFields<T extends FieldValues>({
  config,
  formControls,
  children,
}: FormFieldRendererProps<T>) {
  if (!config || config.length === 0) {
    return null
  }

  return (
    <>
      {config.map((formSection, index) => {
        let formSectionJSX: React.ReactElement = <></>

        if (formSection.containerType === FieldContainerTypes.container) {
          formSectionJSX = (
            <FieldContainer className={formSection.containerConfig.classes}>
              <ShadcnReactHookFields fields={formSection.fields} formControl={formControls} />
              {formSection?.children && (
                <RenderShadcnReactHookFields
                  config={formSection.children}
                  formControls={formControls}
                />
              )}
            </FieldContainer>
          )
        }

        if (formSection.containerType === FieldContainerTypes.accordionContainer) {
          formSectionJSX = (
            <AccordionContainer config={formSection.containerConfig}>
              <ShadcnReactHookFields fields={formSection.fields} formControl={formControls} />
              {formSection?.children && (
                <RenderShadcnReactHookFields
                  config={formSection.children}
                  formControls={formControls}
                />
              )}
            </AccordionContainer>
          )
        }

        if (formSection.containerType === FieldContainerTypes.noContainer) {
          formSectionJSX = (
            <>
              <ShadcnReactHookFields fields={formSection.fields} formControl={formControls} />
              {formSection?.children && (
                <RenderShadcnReactHookFields
                  config={formSection.children}
                  formControls={formControls}
                />
              )}
            </>
          )
        }

        return (
          <Fragment key={`${formSection.containerType}-${index.toString()}`}>
            {formSectionJSX}
            {children}
          </Fragment>
        )
      })}
    </>
  )
}

export default RenderShadcnReactHookFields
