import React from 'react'

import OpenItemsTable, {
  OpenItemsTableConfig,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenItemsTable'
import { GenericTableColumns } from '@/components/custom/Table/GenericTable'

export const openPledgeColumns: GenericTableColumns<OpenPledge> = [
  {
    key: 'id',
    header: 'Pledge Guid',
    shouldRenderValue: false,
  },
  {
    key: 'pledgeFundId',
    header: 'Fund Id',
    shouldRenderValue: true,
  },
  {
    key: 'pledgeFundName',
    header: 'Designation Name',
    shouldRenderValue: true,
  },
  {
    key: 'pledgeRelationshipFullName',
    header: 'Constituent Name',
    shouldRenderValue: true,
  },
  {
    key: 'pledgeRelationshipType',
    header: 'Relationship Type',
    shouldRenderValue: true,
  },
  {
    key: 'pledgeAmount',
    header: 'Pledge Amount',
    shouldRenderValue: true,
  },
  {
    key: 'pledgeAmountRemaining',
    header: 'Remaining Balance',
    shouldRenderValue: true,
  },
]

export type OpenPledgeOpportunityRelationshipTypes =
  | 'Spouse/Partner'
  | 'Primary Entity'
  | 'Parent Corporation'
  | 'Self'
  | null

export type OpenPledge = {
  id: string | null //should never be null (will be the pledge guid)
  pledgeFundId: string | null
  pledgeFundName: string | null
  pledgeUnit: string | null
  pledgeDepartment: string | null
  pledgeRelationshipFullName: string | null
  pledgeRelationshipType: OpenPledgeOpportunityRelationshipTypes
  pledgeAmount: string | null
  pledgeAmountRemaining: string | null
  revenueId: string | null
}

type OpenPledgesProps = {
  data: OpenPledge[]
} & OpenItemsTableConfig

export default function OpenPledges({ ...props }: OpenPledgesProps) {
  return <OpenItemsTable columns={openPledgeColumns} type={'pledge'} {...props} />
}
