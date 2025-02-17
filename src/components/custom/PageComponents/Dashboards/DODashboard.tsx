import DataCard, { DataCardLoader, DataCardProps } from '@/components/custom/Layout/Cards/DataCard'
import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { dummy_dashboard_cards } from '@/lib/testData/testData'
import { testDelay } from '@utilities/testDelay'

export type DODashboardProps = {}

export default async function DODashboard({}: DODashboardProps) {
  const data = await testDelay({ resolveData: dummy_dashboard_cards })

  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {data.map((card: DataCardProps, index) => {
          return (
            <Suspense key={card.id} fallback={<DataCardLoader />}>
              <DataCard
                id={card.id}
                title={card.title}
                amount={card.amount}
                info={card.info}
                progress={card.progress}
              />
            </Suspense>
          )
        })}
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Gifts</CardTitle>
              <CardDescription>Recent gifts from donors</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                View More
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Jim Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      jj@donor.com
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Jeff Gordon</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      jgordon@donor.com
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Jim Brown</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      jbrown@example.com
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Jack Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      jsnith@donor.com
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Beef Cake</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      bcake@donor.com
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$550.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Proposals</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                {/*<AvatarImage src="/avatars/01.png" alt="Avatar" />*/}
                <AvatarFallback>BS</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Ben Statler</p>
                <p className="text-sm text-muted-foreground">bstatler@richperson.com</p>
              </div>
              <div className="ml-auto font-medium">$500,000.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                {/*<AvatarImage src="/avatars/01.png" alt="Avatar" />*/}
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">James Rhodes</p>
                <p className="text-sm text-muted-foreground">james.rhodes@richperson.com</p>
              </div>
              <div className="ml-auto font-medium">$200,000.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                {/*<AvatarImage src="/avatars/01.png" alt="Avatar" />*/}
                <AvatarFallback>EDJ</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Eric D. Jarrell</p>
                <p className="text-sm text-muted-foreground">ejarrell@wvuf.org</p>
              </div>
              <div className="ml-auto font-medium">$10,000.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                {/*<AvatarImage src="/avatars/01.png" alt="Avatar" />*/}
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Elliott &quot;Spyder&quot; Mayle</p>
                <p className="text-sm text-muted-foreground">emayle@theclothed.org</p>
              </div>
              <div className="ml-auto font-medium">$777.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                {/*<AvatarImage src="/avatars/01.png" alt="Avatar" />*/}
                <AvatarFallback>BS</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Brian Shipp</p>
                <p className="text-sm text-muted-foreground">bshipp@richperson.com</p>
              </div>
              <div className="ml-auto font-medium">$400,000.00</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
