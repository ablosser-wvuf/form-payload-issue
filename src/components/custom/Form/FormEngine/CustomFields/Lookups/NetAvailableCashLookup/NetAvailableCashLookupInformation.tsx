import React from 'react'
import { AvatarInformationSkeletonLoader } from '@/components/custom/SkeletonLoaders/SkeletonLoaders'
import RefetchAlertError from '@/components/custom/Form/GenericFormComponents/RefetchAlertError'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { NetAvailableCashLookupFormEngineFieldState } from '@/components/custom/Form/FormEngine/CustomFields/Lookups/NetAvailableCashLookup/NetAvailableCashLookup'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NULL_VALUE } from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/InformationContent/InformationContent'
import TableCard from '@/components/custom/Layout/Cards/TableCard'
import { Button } from '@/components/ui/button'
import { CircleX } from 'lucide-react'

export type NetAvailableCashLookupInformationProps<T> = {
  isError: boolean
  isLoading: boolean
  data: NetAvailableCashLookupFormEngineFieldState | undefined
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<T, Error>>
  handleInformationClear: () => void
}

export default function NetAvailableCashLookupInformation<T>({
  isError,
  isLoading,
  refetch,
  data,
  handleInformationClear,
}: NetAvailableCashLookupInformationProps<T>) {
  // data = {
  //     fundName: 'Alumni Association',
  //     budgetDivision: 'Alumni Association',
  //     unit: 'Alumni Association',
  //     department: 'Alumni Association',
  //     netAvailableCash: '$50,000.00'
  // }

  let netAvailableCashContent = <AvatarInformationSkeletonLoader showAnimation={false} />

  if (isError) {
    netAvailableCashContent = (
      <RefetchAlertError
        refetch={refetch}
        errorText={`Something went wrong and the constituent was not added. Please try again.`}
      />
    )
  }

  if (isLoading) {
    netAvailableCashContent = <AvatarInformationSkeletonLoader showAnimation={true} />
  }

  // <CardHeader>
  //     <CardTitle className={"text-lg font-bold"}>{data.fundName ?? NULL_VALUE}</CardTitle>
  //     <CardDescription></CardDescription>
  // </CardHeader>

  if (!!data) {
    netAvailableCashContent = (
      <Card>
        <CardContent className={'p-6'}>
          <div className={'flex justify-between gap-5'}>
            <div className={'flex flex-col gap-5'}>
              <div>
                <div className={'text-lg font-bold'}>{data.fundName ?? NULL_VALUE}</div>
                <p className={'text-sm text-muted-foreground'}>
                  You have selected a fund with the following information:
                </p>
              </div>
              <div className={'flex flex-wrap gap-9'}>
                <div>
                  <div className={'font-semibold'}>Budget Division</div>
                  <p>{data.budgetDivision ?? NULL_VALUE}</p>
                </div>
                <div>
                  <div className={'font-semibold'}>Unit</div>
                  <p>{data.unit ?? NULL_VALUE}</p>
                </div>
                <div>
                  <div className={'font-semibold'}>Department</div>
                  <p>{data.department ?? NULL_VALUE}</p>
                </div>
                <div>
                  <div className={'font-semibold'}>Net Available Cash</div>
                  <p>{data.netAvailableCash ?? NULL_VALUE}</p>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant={'destructive'}
                type={'button'}
                title={'Remove'}
                onClick={() => {
                  handleInformationClear()
                }}
              >
                <CircleX />
                Remove
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return <>{netAvailableCashContent}</>
}
