import React, { PropsWithChildren, ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export type TableCardProps = {
  cardHeader?: ReactNode
  cardCss?: string
} & PropsWithChildren

export default function TableCard({ cardHeader, cardCss, children }: TableCardProps) {
  return (
    <Card className={cardCss}>
      {cardHeader}
      <CardContent className={'p-6 pt-0'}>{children}</CardContent>
    </Card>
  )
}
