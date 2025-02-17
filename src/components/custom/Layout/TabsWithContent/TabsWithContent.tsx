import React, {
  ComponentProps,
  ComponentType,
  ElementType,
  PropsWithChildren,
  ReactNode,
  Suspense,
} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import DODashboard, {
  DODashboardProps,
} from '@/components/custom/PageComponents/Dashboards/DODashboard'
import { dummy_dashboard_cards } from '@/lib/testData/testData'
import BODashboard, {
  BODashboardProps,
} from '@/components/custom/PageComponents/Dashboards/BODashboard'
import FinanceDashboard, {
  FinanceDashboardProps,
} from '@/components/custom/PageComponents/Dashboards/FinanceDashboard'
import ServiceCenter, {
  ServiceCenterProps,
} from '@/components/custom/PageComponents/ServiceCenter/ServiceCenter'
import { testDelay } from '@utilities/testDelay'
import { Skeleton } from '@/components/ui/skeleton'
import { TabContentSkeletonLoader } from '@/components/custom/SkeletonLoaders/SkeletonLoaders'

/**
 * Components you want to render inside tabs
 */
// export const TabsComponentMap = {
//   developmentOfficer: DODashboard,
//   budgetOfficer: BODashboard,
//   finance: FinanceDashboard,
//   serviceCenter: ServiceCenter,
// }

type TabContent<T extends ElementType> = {
  order?: number
  value: string
  label: string
  component: T
  props: ComponentProps<T>
}

export type TabsWithContentProps<T extends ElementType> = {
  defaultTabValue: string
  tabs: TabContent<T>[]
} & PropsWithChildren

export default function TabsWithContent<T extends ElementType>({
  defaultTabValue,
  tabs,
}: TabsWithContentProps<T>) {
  return (
    <Tabs defaultValue={defaultTabValue} className={'flex flex-1 flex-col gap-3'}>
      <div className="flex items-center">
        <TabsList>
          {tabs.map((tab) => {
            return (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            )
          })}
        </TabsList>
      </div>
      {tabs.map((tab, index) => {
        const Component = tab.component

        return (
          <TabsContent key={tab.value} value={tab.value}>
            <Suspense fallback={<TabContentSkeletonLoader />}>
              <Component {...tab.props} />
            </Suspense>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
