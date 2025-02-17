'use client'

import { use, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Check, Loader2 } from 'lucide-react'
import { goto } from './actions'

type ConfirmationProps = {
  open: boolean
  redirect: string
  action: string
  orkesTaskID: number
  cancelCallback: () => void
}

export default function RequestConfirmation(props: ConfirmationProps) {
  const [open, setOpen] = useState(props.open)
  const [isLoading, setIsLoading] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirm = async (action: 'approve' | 'reject') => {
    setIsLoading(true)
    try {
      // Replace with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call
      setIsConfirmed(true)
    } catch (error) {
      // Handle errors here
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
      setTimeout(() => setOpen(false), 1000) // Close modal after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      goto(props.redirect)
    }
  }

  useEffect(() => {
    if (props.open) {
      setOpen(true)
    }
  }, [props.open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.action} Request?</DialogTitle>
          <DialogDescription>
            Are you sure you wish to {props.action} this request? This cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4 mt-4 justify-end">
          <Button
            variant="destructive"
            onClick={() => {
              setOpen(false)
              props.cancelCallback()
            }}
            disabled={isLoading || isConfirmed}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={() => handleConfirm('approve')}
            disabled={isLoading || isConfirmed}
          >
            Confirm
          </Button>
        </div>

        {isLoading && (
          <div className="flex justify-center mt-4">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        )}

        {isConfirmed && (
          <div className="flex justify-center mt-4 text-green-500">
            <Check className="w-6 h-6" />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
