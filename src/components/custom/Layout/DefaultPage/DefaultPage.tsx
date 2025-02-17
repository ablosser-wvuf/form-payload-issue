import React, { PropsWithChildren } from 'react'
import { Card, CardContent } from '@/components/ui/card'

type DefaultPageProps = {
  pageTitle: string
  pageDescription: string
} & PropsWithChildren

export default function DefaultPage({ pageTitle, pageDescription, children }: DefaultPageProps) {
  return (
    <div className={'flex flex-col gap-3'}>
      <div className={'flex flex-col gap-1'}>
        <h1 className={'text-3xl font-bold tracking-tight'}>{pageTitle}</h1>
        <p className={'text-base text-muted-foreground'}>{pageDescription}</p>
      </div>
      <Card>
        {/*<CardHeader>*/}
        {/*    <CardTitle>Daily Briefing</CardTitle>*/}
        {/*    <CardDescription>Deploy your new project in one-click.</CardDescription>*/}
        {/*</CardHeader>*/}
        <CardContent className={'pt-6'}>{children}</CardContent>
      </Card>
    </div>
  )
}
