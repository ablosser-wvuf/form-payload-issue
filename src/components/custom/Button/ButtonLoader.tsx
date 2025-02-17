import React, { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type ConstituentDialogSearchButtonProps = {
  isPending: boolean
  buttonText: string
  icon?: ReactNode
}

export default function ButtonLoader({
  isPending,
  buttonText,
  icon,
}: ConstituentDialogSearchButtonProps) {
  return (
    <Button type="submit" disabled={isPending}>
      {isPending && <Loader2 className="animate-spin" />}
      {icon && icon}
      {buttonText}
    </Button>
  )
}
