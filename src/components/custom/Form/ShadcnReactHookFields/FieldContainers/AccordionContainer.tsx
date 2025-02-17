import React, { PropsWithChildren } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

type AccordionContainerProps = {
  config: {
    label: string
    autoOpen: boolean //expanded by default
    separator?: 'before' | 'after'
  }
} & PropsWithChildren

export default function AccordionContainer({ config, children }: AccordionContainerProps) {
  return (
    <>
      {config.separator === 'before' ? <Separator /> : null}
      <Accordion type="single" collapsible defaultValue={config.autoOpen ? 'value-1' : undefined}>
        <AccordionItem value={'value-1'} className={'border-none'}>
          <AccordionTrigger className={'pt-0'}>{config.label}</AccordionTrigger>
          <AccordionContent className={'p-0'}>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
      {config.separator === 'after' ? <Separator /> : null}
    </>
  )
}
