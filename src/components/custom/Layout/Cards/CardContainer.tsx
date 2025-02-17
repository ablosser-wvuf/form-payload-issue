import { Card, CardContent } from '@/components/ui/card'
import React, { PropsWithChildren } from 'react'

type CardContainerProps = {} & PropsWithChildren

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <Card className={'mb-4 last:mb-0'}>
      <CardContent className={'p-6'}>
        <div className={'flex flex-col gap-3'}>{children}</div>
      </CardContent>
    </Card>
  )
}
