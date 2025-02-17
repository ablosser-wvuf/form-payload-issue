import React, { ComponentProps, Suspense } from 'react'

import DataTable from '@/components/custom/DataTable/DataTable'
import { requestColumns } from '@/components/custom/PageComponents/ServiceCenter/Requests/requestColumns'
import TabsWithContent, {
  // TabsComponentMap,
  TabsWithContentProps,
} from '@/components/custom/Layout/TabsWithContent/TabsWithContent'
import { TabsContent } from '@/components/ui/tabs'
import { taskColumns } from '@/components/custom/PageComponents/ServiceCenter/Tasks/taskColumns'
import { testDelay } from '@utilities/testDelay'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Copy, CreditCard, MoreVertical, Truck } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
import { RequestSchema } from '@schemas/serviceCenter/requestSchema'
import { TaskSchema } from '@schemas/serviceCenter/taskSchema'
import { ColumnDef } from '@tanstack/react-table'

// const testData: Payment[] = [
//   {
//     id: 'm5gr84i9',
//     amount: 316,
//     status: 'success',
//     email: 'ken99@yahoo.com',
//   },
//   {
//     id: '3u1reuv4',
//     amount: 242,
//     status: 'success',
//     email: 'Abe45@gmail.com',
//   },
//   {
//     id: 'derv1ws0',
//     amount: 837,
//     status: 'processing',
//     email: 'Monserrat44@gmail.com',
//   },
//   {
//     id: '5kma53ae',
//     amount: 874,
//     status: 'success',
//     email: 'Silas22@gmail.com',
//   },
//   {
//     id: 'bhqecj4p',
//     amount: 721,
//     status: 'failed',
//     email: 'carmella@hotmail.com',
//   },
// ]

// const tabsContent: TabsWithContentProps<typeof DataTableWrapper> = {
//   defaultTabValue: 'request',
//   tabs: [
//     {
//       value: 'request',
//       label: 'Requests',
//       component: DataTableWrapper,
//       props: { type: 'requests' },
//     },
//     {
//       value: 'task',
//       label: 'Tasks',
//       component: DataTableWrapper,
//       props: { type: 'tasks' },
//     },
//   ],
// }

export type ServiceTypes = 'requests' | 'tasks'

export type ServiceCenterProps = {
  data: RequestSchema[] | TaskSchema[]
  type: ServiceTypes
  slug: string
}

export default function ServiceCenter({ data, type, slug }: ServiceCenterProps) {
  const columns = type === 'requests' ? requestColumns : taskColumns

  return (
    <div
      className={'grid  flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'}
    >
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>{slug}</CardTitle>
            <CardDescription>Hi data requests are cool and stuff.</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable data={data} columns={columns as ColumnDef<(typeof data)[0]>[]} />
          </CardContent>
        </Card>
      </div>

      {/*<div className="aspect-video rounded-xl bg-muted/50" />*/}
      <div className=" w-full h-full rounded-xl bg-muted/50 md:min-h-min"></div>
    </div>
  )
}

{
  /*<div>*/
}
{
  /*  <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">*/
}
{
  /*    <CardHeader className="flex flex-row items-start bg-muted/50">*/
}
{
  /*      <div className="grid gap-0.5">*/
}
{
  /*        <CardTitle className="group flex items-center gap-2 text-lg">*/
}
{
  /*          Order Oe31b70H*/
}
{
  /*          <Button*/
}
{
  /*            size="icon"*/
}
{
  /*            variant="outline"*/
}
{
  /*            className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"*/
}
{
  /*          >*/
}
{
  /*            <Copy className="h-3 w-3" />*/
}
{
  /*            <span className="sr-only">Copy Order ID</span>*/
}
{
  /*          </Button>*/
}
{
  /*        </CardTitle>*/
}
{
  /*        <CardDescription>Date: November 23, 2023</CardDescription>*/
}
{
  /*      </div>*/
}
{
  /*      <div className="ml-auto flex items-center gap-1">*/
}
{
  /*        <Button size="sm" variant="outline" className="h-8 gap-1">*/
}
{
  /*          <Truck className="h-3.5 w-3.5" />*/
}
{
  /*          <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Track Order</span>*/
}
{
  /*        </Button>*/
}
{
  /*        <DropdownMenu>*/
}
{
  /*          <DropdownMenuTrigger asChild>*/
}
{
  /*            <Button size="icon" variant="outline" className="h-8 w-8">*/
}
{
  /*              <MoreVertical className="h-3.5 w-3.5" />*/
}
{
  /*              <span className="sr-only">More</span>*/
}
{
  /*            </Button>*/
}
{
  /*          </DropdownMenuTrigger>*/
}
{
  /*          <DropdownMenuContent align="end">*/
}
{
  /*            <DropdownMenuItem>Edit</DropdownMenuItem>*/
}
{
  /*            <DropdownMenuItem>Export</DropdownMenuItem>*/
}
{
  /*            <DropdownMenuSeparator />*/
}
{
  /*            <DropdownMenuItem>Trash</DropdownMenuItem>*/
}
{
  /*          </DropdownMenuContent>*/
}
{
  /*        </DropdownMenu>*/
}
{
  /*      </div>*/
}
{
  /*    </CardHeader>*/
}
{
  /*    <CardContent className="p-6 text-sm">*/
}
{
  /*      <div className="grid gap-3">*/
}
{
  /*        <div className="font-semibold">Order Details</div>*/
}
{
  /*        <ul className="grid gap-3">*/
}
{
  /*          <li className="flex items-center justify-between">*/
}
{
  /*            <span className="text-muted-foreground">*/
}
{
  /*              Glimmer Lamps x <span>2</span>*/
}
{
  /*            </span>*/
}
{
  /*            <span>$250.00</span>*/
}
{
  /*          </li>*/
}
{
  /*          <li className="flex items-center justify-between">*/
}
{
  /*            <span className="text-muted-foreground">*/
}
{
  /*              Aqua Filters x <span>1</span>*/
}
{
  /*            </span>*/
}
{
  /*            <span>$49.00</span>*/
}
{
  /*          </li>*/
}
{
  /*        </ul>*/
}
{
  /*        <Separator className="my-2" />*/
}
{
  /*        <ul className="grid gap-3">*/
}
{
  /*          <li className="flex items-center justify-between">*/
}
{
  /*            <span className="text-muted-foreground">Subtotal</span>*/
}
{
  /*            <span>$299.00</span>*/
}
{
  /*          </li>*/
}
{
  /*          <li className="flex items-center justify-between">*/
}
{
  /*            <span className="text-muted-foreground">Shipping</span>*/
}
{
  /*            <span>$5.00</span>*/
}
{
  /*          </li>*/
}
{
  /*          <li className="flex items-center justify-between">*/
}
{
  /*            <span className="text-muted-foreground">Tax</span>*/
}
{
  /*            <span>$25.00</span>*/
}
{
  /*          </li>*/
}
{
  /*          <li className="flex items-center justify-between font-semibold">*/
}
{
  /*            <span className="text-muted-foreground">Total</span>*/
}
{
  /*            <span>$329.00</span>*/
}
{
  /*          </li>*/
}
{
  /*        </ul>*/
}
{
  /*      </div>*/
}
{
  /*      <Separator className="my-4" />*/
}
{
  /*      <div className="grid grid-cols-2 gap-4">*/
}
{
  /*        <div className="grid gap-3">*/
}
{
  /*          <div className="font-semibold">Shipping Information</div>*/
}
{
  /*          <address className="grid gap-0.5 not-italic text-muted-foreground">*/
}
{
  /*            <span>Liam Johnson</span>*/
}
{
  /*            <span>1234 Main St.</span>*/
}
{
  /*            <span>Anytown, CA 12345</span>*/
}
{
  /*          </address>*/
}
{
  /*        </div>*/
}
{
  /*        <div className="grid auto-rows-max gap-3">*/
}
{
  /*          <div className="font-semibold">Billing Information</div>*/
}
{
  /*          <div className="text-muted-foreground">Same as shipping address</div>*/
}
{
  /*        </div>*/
}
{
  /*      </div>*/
}
{
  /*      <Separator className="my-4" />*/
}
{
  /*      <div className="grid gap-3">*/
}
{
  /*        <div className="font-semibold">Customer Information</div>*/
}
{
  /*        <dl className="grid gap-3">*/
}
{
  /*          <div className="flex items-center justify-between">*/
}
{
  /*            <dt className="text-muted-foreground">Customer</dt>*/
}
{
  /*            <dd>Liam Johnson</dd>*/
}
{
  /*          </div>*/
}
{
  /*          <div className="flex items-center justify-between">*/
}
{
  /*            <dt className="text-muted-foreground">Email</dt>*/
}
{
  /*            <dd>*/
}
{
  /*              <a href="mailto:">liam@acme.com</a>*/
}
{
  /*            </dd>*/
}
{
  /*          </div>*/
}
{
  /*          <div className="flex items-center justify-between">*/
}
{
  /*            <dt className="text-muted-foreground">Phone</dt>*/
}
{
  /*            <dd>*/
}
{
  /*              <a href="tel:">+1 234 567 890</a>*/
}
{
  /*            </dd>*/
}
{
  /*          </div>*/
}
{
  /*        </dl>*/
}
{
  /*      </div>*/
}
{
  /*      <Separator className="my-4" />*/
}
{
  /*      <div className="grid gap-3">*/
}
{
  /*        <div className="font-semibold">Payment Information</div>*/
}
{
  /*        <dl className="grid gap-3">*/
}
{
  /*          <div className="flex items-center justify-between">*/
}
{
  /*            <dt className="flex items-center gap-1 text-muted-foreground">*/
}
{
  /*              <CreditCard className="h-4 w-4" />*/
}
{
  /*              Visa*/
}
{
  /*            </dt>*/
}
{
  /*            <dd>**** **** **** 4532</dd>*/
}
{
  /*          </div>*/
}
{
  /*        </dl>*/
}
{
  /*      </div>*/
}
{
  /*    </CardContent>*/
}
{
  /*    <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">*/
}
{
  /*      <div className="text-xs text-muted-foreground">*/
}
{
  /*        Updated <time dateTime="2023-11-23">November 23, 2023</time>*/
}
{
  /*      </div>*/
}
{
  /*      <Pagination className="ml-auto mr-0 w-auto">*/
}
{
  /*        <PaginationContent>*/
}
{
  /*          <PaginationItem>*/
}
{
  /*            <Button size="icon" variant="outline" className="h-6 w-6">*/
}
{
  /*              <ChevronLeft className="h-3.5 w-3.5" />*/
}
{
  /*              <span className="sr-only">Previous Order</span>*/
}
{
  /*            </Button>*/
}
{
  /*          </PaginationItem>*/
}
{
  /*          <PaginationItem>*/
}
{
  /*            <Button size="icon" variant="outline" className="h-6 w-6">*/
}
{
  /*              <ChevronRight className="h-3.5 w-3.5" />*/
}
{
  /*              <span className="sr-only">Next Order</span>*/
}
{
  /*            </Button>*/
}
{
  /*          </PaginationItem>*/
}
{
  /*        </PaginationContent>*/
}
{
  /*      </Pagination>*/
}
{
  /*    </CardFooter>*/
}
{
  /*  </Card>*/
}
{
  /*</div>*/
}

type ServiceCenterWrapperProps = {
  type: 'requests' | 'tasks'
}

export async function DataTableWrapper({ type }: ServiceCenterWrapperProps) {
  //get data
  // const response = await fetch(`some/api/endpoint/${type}`)
  //
  // const data = await response.json()

  // const data = await testDelay({ resolveData: testData })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Request</CardTitle>
        <CardDescription>Hi data requests are cool and stuff.</CardDescription>
      </CardHeader>
      <CardContent>
        {/*<DataTable data={data} columns={type === 'requests' ? requestColumns : taskColumns} />*/}
      </CardContent>
    </Card>
  )
}
