import DataCard, { DataCardLoader, DataCardProps } from '@/components/custom/Layout/Cards/DataCard'
import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUpRight, MoreHorizontal, Smile } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { dummy_dashboard_cards } from '@/lib/testData/testData'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { testDelay } from '@utilities/testDelay'

export type FinanceDashboardProps = {}

export default async function FinanceDashboard({}: FinanceDashboardProps) {
  const data = await testDelay({ resolveData: dummy_dashboard_cards })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Price</TableHead>
          <TableHead className="hidden md:table-cell">Total Sales</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="hidden sm:table-cell">
            {/*<Image*/}
            {/*    alt="Product image"*/}
            {/*    className="aspect-square rounded-md object-cover"*/}
            {/*    height="64"*/}
            {/*    src="/placeholder.svg"*/}
            {/*    width="64"*/}
            {/*/>*/}
            <Smile className={'w-6 h-6'} />
          </TableCell>
          <TableCell className="font-medium">Laser Lemonade Machine</TableCell>
          <TableCell>
            <Badge variant="outline">Draft</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">$499.99</TableCell>
          <TableCell className="hidden md:table-cell">25</TableCell>
          <TableCell className="hidden md:table-cell">2023-07-12 10:42 AM</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="hidden sm:table-cell">
            {/*<Image*/}
            {/*    alt="Product image"*/}
            {/*    className="aspect-square rounded-md object-cover"*/}
            {/*    height="64"*/}
            {/*    src="/placeholder.svg"*/}
            {/*    width="64"*/}
            {/*/>*/}
            <Smile className={'w-6 h-6'} />
          </TableCell>
          <TableCell className="font-medium">Hypernova Headphones</TableCell>
          <TableCell>
            <Badge variant="outline">Active</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">$129.99</TableCell>
          <TableCell className="hidden md:table-cell">100</TableCell>
          <TableCell className="hidden md:table-cell">2023-10-18 03:21 PM</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="hidden sm:table-cell">
            {/*<Image*/}
            {/*    alt="Product image"*/}
            {/*    className="aspect-square rounded-md object-cover"*/}
            {/*    height="64"*/}
            {/*    src="/placeholder.svg"*/}
            {/*    width="64"*/}
            {/*/>*/}
            <Smile className={'w-6 h-6'} />
          </TableCell>
          <TableCell className="font-medium">AeroGlow Desk Lamp</TableCell>
          <TableCell>
            <Badge variant="outline">Active</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">$39.99</TableCell>
          <TableCell className="hidden md:table-cell">50</TableCell>
          <TableCell className="hidden md:table-cell">2023-11-29 08:15 AM</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="hidden sm:table-cell">
            {/*<Image*/}
            {/*    alt="Product image"*/}
            {/*    className="aspect-square rounded-md object-cover"*/}
            {/*    height="64"*/}
            {/*    src="/placeholder.svg"*/}
            {/*    width="64"*/}
            {/*/>*/}
            <Smile className={'w-6 h-6'} />
          </TableCell>
          <TableCell className="font-medium">TechTonic Energy Drink</TableCell>
          <TableCell>
            <Badge variant="secondary">Draft</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">$2.99</TableCell>
          <TableCell className="hidden md:table-cell">0</TableCell>
          <TableCell className="hidden md:table-cell">2023-12-25 11:59 PM</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="hidden sm:table-cell">
            {/*<Image*/}
            {/*    alt="Product image"*/}
            {/*    className="aspect-square rounded-md object-cover"*/}
            {/*    height="64"*/}
            {/*    src="/placeholder.svg"*/}
            {/*    width="64"*/}
            {/*/>*/}
            <Smile className={'w-6 h-6'} />
          </TableCell>
          <TableCell className="font-medium">Gamer Gear Pro Controller</TableCell>
          <TableCell>
            <Badge variant="outline">Active</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">$59.99</TableCell>
          <TableCell className="hidden md:table-cell">75</TableCell>
          <TableCell className="hidden md:table-cell">2024-01-01 12:00 AM</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="hidden sm:table-cell">
            {/*<Image*/}
            {/*    alt="Product image"*/}
            {/*    className="aspect-square rounded-md object-cover"*/}
            {/*    height="64"*/}
            {/*    src="/placeholder.svg"*/}
            {/*    width="64"*/}
            {/*/>*/}
            <Smile className={'w-6 h-6'} />
          </TableCell>
          <TableCell className="font-medium">Luminous VR Headset</TableCell>
          <TableCell>
            <Badge variant="outline">Active</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">$199.99</TableCell>
          <TableCell className="hidden md:table-cell">30</TableCell>
          <TableCell className="hidden md:table-cell">2024-02-14 02:14 PM</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
