import React, { useState } from 'react'

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
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { SearchConstituentResults as SearchConstituentResultsType } from '@forms/searchConstituent/SearchConstituentForm'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

type SearchConstituentResultsProps = {
  searchResults: SearchConstituentResultsType
  handleConstituentSearchSelectionClose: () => void
  handleAdvancedConstituentSearchSelection: (constituentId: string) => void
  isLoading: boolean
  isError: boolean
  isInitialSearch: boolean
}

export default function SearchConstituentResults({
  searchResults,
  handleAdvancedConstituentSearchSelection,
  handleConstituentSearchSelectionClose,
  isLoading,
  isError,
  isInitialSearch,
}: SearchConstituentResultsProps) {
  let content = <SearchConstituentLoader showAnimation={false} />

  if (searchResults.length === 0 && !isInitialSearch) {
    content = (
      <div className={'flex items-center justify-center w-full h-80'}>
        <div className={'flex'}>No Results</div>
      </div>
    )
  }

  //className={"relative min-w-full"}

  if (searchResults.length > 0) {
    content = (
      <ScrollArea className="w-1 flex-1 whitespace-nowrap h-80">
        <div className="flex w-full space-x-4">
          <div className="flex overflow-hidden w-full">
            <Table className={'relative min-w-full'}>
              {/*<TableCaption>A list of constituents</TableCaption>*/}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Constituent Id</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>DoB</TableHead>
                  <TableHead>Primary Business Name</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/*todo: change type when we figure out what it is going to be */}
                {searchResults.map((constituentInfo) => (
                  <TableRow key={constituentInfo.constituentId}>
                    <TableCell className="font-medium">
                      {constituentInfo.constituentId ?? 'No data'}
                    </TableCell>
                    <TableCell>{`${constituentInfo.constituentType ?? 'No data'}`}</TableCell>
                    <TableCell>{`${constituentInfo.fullName ?? 'No data'}`}</TableCell>
                    <TableCell>{constituentInfo.email ?? 'No data'}</TableCell>
                    <TableCell>{constituentInfo.address ?? 'No data'}</TableCell>
                    <TableCell>{constituentInfo.dateOfBirth ?? 'No data'}</TableCell>
                    <TableCell>{constituentInfo.primaryBusinessName ?? 'No data'}</TableCell>
                    <TableCell>
                      <Button
                        type={'button'}
                        title={'Select constituent'}
                        onClick={() => {
                          handleConstituentSearchSelectionClose()
                          handleAdvancedConstituentSearchSelection(
                            constituentInfo.constituentId ?? 'null',
                          ) //we are passing null as a string here, to let the react query handle the error when it calls our api with an invalid constituent id
                        }}
                      >
                        Select
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {/*<TableFooter>*/}
              {/*    <TableRow>*/}
              {/*        <TableCell colSpan={3}>Total</TableCell>*/}
              {/*        <TableCell className="text-right">$2,500.00</TableCell>*/}
              {/*    </TableRow>*/}
              {/*</TableFooter>*/}
            </Table>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
  }

  if (isLoading) {
    content = <SearchConstituentLoader showAnimation={true} />
  }

  if (isError) {
    content = (
      <div className={'flex items-center justify-center w-full h-80'}>
        <div className={'flex'}>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong. Please try again.</AlertDescription>
          </Alert>
        </div>
      </div>
    )
  }

  return <div className={'flex rounded-md border p-4'}>{content}</div>
}

function SearchConstituentLoader({ showAnimation }: { showAnimation: boolean }) {
  return (
    // <div className={`flex flex-col w-full h-80 space-y-4 ${showAnimation ? "" : "animate-none"}`}>
    <div className={`flex flex-col w-full h-80 space-y-4`}>
      <Skeleton className={`h-full w-full ${showAnimation ? '' : 'animate-none'}`} />
    </div>
  )
}
