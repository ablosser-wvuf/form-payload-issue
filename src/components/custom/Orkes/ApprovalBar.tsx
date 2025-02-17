'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

import RequestConfirmation from '@/components/custom/Orkes/RequestConfirmation'

import { goto } from '@/components/custom/Orkes/actions'

import { useState } from 'react'

interface Request {
  orkesTaskID: number
  redirect: string
}

export default function ApprovalBar({ request }: { request: Request }) {
  const [confirm, setConfirm] = useState(false)
  const [action, setAction] = useState('')

  const handleApproval = (action: string) => {
    // Implement your approval logic here
    // goto(request.redirect);

    setConfirm(true)
    setAction(action)
  }

  const cancelCallback = () => {
    console.log('Cancel Callback')
    setConfirm(false)
  }

  return (
    <>
      <RequestConfirmation
        orkesTaskID={request.orkesTaskID}
        open={confirm}
        redirect={request.redirect}
        action={action}
        cancelCallback={cancelCallback}
      />
      <Card className="mt-4">
        <CardHeader className="flex flex-column items-center justify-between">
          <Button
            style={{ backgroundColor: 'green', color: 'white' }}
            className="w-full"
            variant="secondary"
            onClick={() => handleApproval('Approve')}
          >
            Approve
          </Button>
          <Button className="w-full" variant="destructive" onClick={() => handleApproval('Deny')}>
            Deny
          </Button>
        </CardHeader>
      </Card>
    </>
  )
}
