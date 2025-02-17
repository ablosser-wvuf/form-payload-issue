import React, { Fragment } from 'react'

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  ConstituentLookupFormEngineFieldState,
  HandlePledgeOpportunitySelection,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentLookup'
import { GenericTableProps, RenderItem } from '@/components/custom/Table/GenericTable'
import TableCard from '@/components/custom/Layout/Cards/TableCard'

export type OpenItemsType = 'pledge' | 'opportunity'

export const OPEN_ITEM_DOES_NOT_APPLY_VALUE = 'does not apply'

export type OpenItemsTableConfig = {
  handlePledgeOpportunitySelection: HandlePledgeOpportunitySelection
  handlePledgeOpportunityTableDisable?: (type: OpenItemsType) => boolean
  constituentLookupStateValue: ConstituentLookupFormEngineFieldState
}

export type OpenItemsTableProps<T extends RenderItem> = {
  type: OpenItemsType
} & GenericTableProps<T> &
  OpenItemsTableConfig

//todo: extract the radiogroup component out into another component so this open items table can be reusuable?
export default function OpenItemsTable<T extends RenderItem>({
  data,
  columns,
  type,
  handlePledgeOpportunitySelection,
  handlePledgeOpportunityTableDisable,
  constituentLookupStateValue,
}: OpenItemsTableProps<T>) {
  const tableDisabledCssClasses = 'pointer-events-none cursor-not-allowed opacity-40'

  return (
    <TableCard
      cardCss={handlePledgeOpportunityTableDisable?.(type) ? tableDisabledCssClasses : ''}
      cardHeader={
        <CardHeader>
          <CardTitle
            className={'text-lg font-bold'}
          >{`Open ${type === 'pledge' ? 'Pledges' : 'Opportunities'}`}</CardTitle>
          <CardDescription>{`You must select if this gift is applicable to a ${type}.`}</CardDescription>
        </CardHeader>
      }
    >
      {/*<Card>*/}
      {/*<RadioGroup defaultValue="option-one">*/}
      <RadioGroup
        value={
          type === 'pledge'
            ? (constituentLookupStateValue?.selectedPledge.pledgeGuid ?? 'Something went wrong')
            : (constituentLookupStateValue.selectedOpportunity.opportunityGuid ??
              'Something went wrong')
        }
        onValueChange={(value) => {
          handlePledgeOpportunitySelection(value, type)
        }}
      >
        <Table>
          <TableCaption>{`A list of open ${type === 'pledge' ? `${type}s` : `opportunities`}.`}</TableCaption>
          <TableHeader>
            <TableRow key={'table-row'}>
              <TableHead key={'table-header-selected'}>Selected</TableHead>
              {columns.map((column, index) => {
                return (
                  <Fragment key={String(column.key)}>
                    {column.shouldRenderValue ? <TableHead>{column.header}</TableHead> : null}
                  </Fragment>
                )
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => {
              return (
                // an id should always exist... but we should provide a fallback just in case
                <TableRow key={`row-${row.id ?? 'null value received'}-${rowIndex}`}>
                  {columns.map((column, columnIndex) => {
                    let value = row[column.key]

                    //always add the radio group item first
                    if (columnIndex === 0) {
                      return (
                        <TableCell key={'radio-input'}>
                          {/* we NEED an id here... but will have a fallback just in case */}
                          {<RadioGroupItem value={row.id ?? 'Something went wrong'} />}
                        </TableCell>
                      )
                    } else {
                      return (
                        <Fragment key={String(column.key)}>
                          {column.shouldRenderValue ? (
                            <TableCell>{value ?? 'No data'}</TableCell>
                          ) : null}
                        </Fragment>
                      )
                    }
                  })}
                </TableRow>
              )
            })}
            <TableRow>
              <TableCell>{<RadioGroupItem value={OPEN_ITEM_DOES_NOT_APPLY_VALUE} />}</TableCell>
              <TableCell colSpan={6}>
                <div className={'flex font-bold'}>
                  {`This gift ${type === 'pledge' ? 'is not a payment on an existing pledge' : 'does not go toward an opportunity'}.`}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </RadioGroup>
    </TableCard>
  )
}
