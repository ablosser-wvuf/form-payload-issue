'use client'

import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function InvoiceTable() {
  const [invoices, setInvoices] = useState<any[]>([])

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/api/ws') // Connect to Next.js WebSocket API

    ws.onmessage = (event) => {
      const updatedData = JSON.parse(event.data)
      setInvoices((prev) => [...prev, ...updatedData]) // Append new data
    }

    //example only updating new invoices
    // ws.onmessage = (event) => {
    //   const updatedData: Invoice[] = JSON.parse(event.data);
    //
    //   setInvoices((prevInvoices) => {
    //     // Create a new Map to store unique invoices by ID
    //     const invoiceMap = new Map(prevInvoices.map((invoice) => [invoice.id, invoice]));
    //
    //     // Add new invoices, updating existing ones if necessary
    //     updatedData.forEach((invoice) => {
    //       invoiceMap.set(invoice.id, invoice);
    //     });
    //
    //     return Array.from(invoiceMap.values()); // Convert Map back to array
    //   });
    // };

    ws.onclose = () => console.log('WebSocket closed')
    ws.onerror = (error) => console.error('WebSocket error:', error)

    return () => ws.close() // Cleanup on unmount
  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
