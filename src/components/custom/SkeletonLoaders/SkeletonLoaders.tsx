import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export function AvatarInformationSkeletonLoader({ showAnimation }: { showAnimation: boolean }) {
  return (
    <Card>
      <CardContent className={'p-6'}>
        <div className="flex items-center gap-3 w-full">
          {/*<Skeleton*/}
          {/*    className={`h-20 w-20 rounded-full bg-slate-200 ${showAnimation ? "" : "animate-none"}`}/>*/}
          <Skeleton className={`h-20 w-20 rounded-full ${showAnimation ? '' : 'animate-none'}`} />
          <div className="flex flex-col gap-3">
            <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
            <Skeleton className={`h-4 w-[80%] ${showAnimation ? '' : 'animate-none'}`} />
            <Skeleton className={`h-4 w-[60%] ${showAnimation ? '' : 'animate-none'}`} />
            <Skeleton className={`h-4 w-[40%] ${showAnimation ? '' : 'animate-none'}`} />
            <Skeleton className={`h-4 w-[20%] ${showAnimation ? '' : 'animate-none'}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function InformationSkeletonLoader({ showAnimation }: { showAnimation: boolean }) {
  return (
    <Card>
      <CardContent className={'p-6'}>
        <div className="flex flex-col gap-3">
          <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[75%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[50%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[25%] ${showAnimation ? '' : 'animate-none'}`} />
        </div>
      </CardContent>
    </Card>
  )
}

export function TabContentSkeletonLoader({ showAnimation = true }: { showAnimation?: boolean }) {
  return (
    <Card>
      <CardContent className={'p-6'}>
        <div className="flex flex-col gap-3">
          <Skeleton className={`h-4 w-[25%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[35%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[50%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[50%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[50%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[50%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[50%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[50%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[75%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[75%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[75%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[75%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[75%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[75%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
          <Skeleton className={`h-4 w-[100%] ${showAnimation ? '' : 'animate-none'}`} />
        </div>
      </CardContent>
    </Card>
  )
}
