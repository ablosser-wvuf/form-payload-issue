import React from 'react'
import { DialogContent } from '@/components/ui/dialog'

type ScrollingDialogContentProps = {
  children: React.ReactNode
}

export default function ScrollingDialogContent({ children }: ScrollingDialogContentProps) {
  {
    /* https://github.com/shadcn-ui/ui/issues/1870 for setting modal width... https://github.com/shadcn-ui/ui/issues/16#issuecomment-1602565563 for overflow*/
  }
  return (
    <DialogContent className="sm:max-w-[600px] md:min-w-[70vw] overflow-y-scroll max-h-screen">
      {children}
    </DialogContent>
  )
}
