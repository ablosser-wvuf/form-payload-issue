import React from 'react'
import { AlertCircle, RotateCcw } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'

type RefetchAlertErrorProps<T> = {
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<T, Error>>
  errorText: string
}

export default function RefetchAlertError<T>({ refetch, errorText }: RefetchAlertErrorProps<T>) {
  return (
    <Alert className={'flex justify-between gap-2'} variant="destructive">
      <div
        className={
          '[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-destructive'
        }
      >
        <AlertCircle className="h-4 w-4 mr-2" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{errorText}</AlertDescription>
      </div>
      <Button
        variant={'destructive'}
        title={'Try Again'}
        onClick={() => {
          refetch()
        }}
      >
        <RotateCcw />
        Try Again
      </Button>
    </Alert>
  )
}
