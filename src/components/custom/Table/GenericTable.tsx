import React, { Fragment } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { NULL_VALUE } from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/InformationContent/InformationContent'

export type RenderItem = {
  id: string | null //will be used for table row keys, this should always exist... but will make null a valid value in case we get bad data from the db
} & Record<string, string | null>

export type GenericTableColumns<T extends RenderItem> = {
  key: keyof T
  header: string
  shouldRenderValue: boolean
}[]

export type GenericTableProps<T extends RenderItem> = {
  data: T[]
  columns: GenericTableColumns<T>
  caption?: string
}

export function GenericTable<T extends RenderItem>({
  data,
  columns,
  caption,
}: GenericTableProps<T>) {
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map((column, columnIndex) => {
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
            // an id should always exist but provide a fallback just in case
            <TableRow key={`row-${row.id ?? 'null value received'}-${rowIndex}`}>
              {columns.map((column) => {
                const value = row[column.key]
                return (
                  <Fragment key={String(column.key)}>
                    {column.shouldRenderValue ? <TableCell>{value ?? NULL_VALUE}</TableCell> : null}
                  </Fragment>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
