import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'

import { testDelay } from '@utilities/testDelay'

export type DataCardProps = {
  id: number
  title: string
  amount: string
  info: string
  progress?: number
}

export default async function DataCard({
  id,
  title,
  amount,
  info,
  progress,
}: DataCardProps): Promise<React.JSX.Element> {
  //fake getting data from backend
  // const data = await testDelay(null);

  //todo: check where to put id if we need to
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <p className="text-xs text-muted-foreground">
          {/*+20.1% from last month*/}
          {info}
        </p>
      </CardContent>
      {progress ? (
        <CardFooter>
          <Progress value={progress} aria-label={`${progress}% increase`} />{' '}
          {/*todo: find out the correct zindex for this to not overlap the navigation menu */}
        </CardFooter>
      ) : null}
    </Card>
  )
}

export function DataCardLoader() {
  return (
    <Card className={'flex flex-col justify-between'}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-1/2 mt-3" />
        <Skeleton className="h-4 w-1/3 mt-3" />
      </CardContent>
    </Card>
  )
}

function testLoader() {
  //big card loader thing
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
