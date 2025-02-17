'use client'

import React, { useTransition } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { test } from '@actions/serviceCenter/actions'

export type Invoice = {
  invoice: string
  paymentStatus: string
  totalAmount: string
  paymentMethod: string
}

type ServiceCenterTestingProps = {
  data: Invoice[]
}

export default function ServiceCenterTesting({ data }: ServiceCenterTestingProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <>
      <Button
        onClick={() => {
          startTransition(async () => {
            await test('INV002')
          })
        }}
        disabled={isPending}
      >
        {isPending ? 'Updating...' : 'Update'}
      </Button>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice) => {
            return (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}
