'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

//I think the only way to go "back" in the browser in nextJS is to use the useRouter hook, which requires a client component. todo: double check this
export default function BackButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => {
        router.back()
      }}
    >
      <ArrowLeft className={'h-4 w-4'} />
      Back
    </Button>
  )
}
