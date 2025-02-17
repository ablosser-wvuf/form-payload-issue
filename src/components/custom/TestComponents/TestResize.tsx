'use client'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Activity, ArrowUpRight, Users, CreditCard, DollarSign } from 'lucide-react'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { cn } from '@utilities/ui'

export default function TestResize() {
  let test = (
    // <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
    <div className="grid gap-4 @md:grid-cols-2 @md:gap-8 @lg:grid-cols-4">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <>
      <main className="flex-1">
        {/*<div className="container relative">*/}
        <div className="relative">
          <section id="blocks" className="grid scroll-mt-24 gap-24 lg:gap-48 h-[800px]">
            <Tabs
              // id={block.name}
              defaultValue="preview"
              className="relative grid w-full scroll-m-20 gap-4"
              style={
                {
                  // "--container-height": block.container?.height,
                } as React.CSSProperties
              }
            >
              {/*<BlockToolbar block={block} resizablePanelRef={ref} />*/}
              <TabsContent
                value="preview"
                className="relative after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted"
              >
                <ResizablePanelGroup direction="horizontal" className="relative z-10">
                  <ResizablePanel
                    // ref={ref}
                    className={cn(
                      'relative rounded-lg border bg-background border-border @container',
                    )}
                    defaultSize={100}
                    minSize={20}
                    order={1}
                  >
                    {test}
                  </ResizablePanel>
                  <ResizableHandle
                    className={cn(
                      'relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block',
                    )}
                  />
                  <ResizablePanel defaultSize={0} minSize={0} order={2} />
                </ResizablePanelGroup>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </>
  )
}
