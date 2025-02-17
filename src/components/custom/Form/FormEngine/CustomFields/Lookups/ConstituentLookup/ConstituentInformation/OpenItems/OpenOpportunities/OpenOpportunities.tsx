import React from 'react'

import OpenItemsTable, {
  OpenItemsTableConfig,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenItemsTable'
import { GenericTableColumns } from '@/components/custom/Table/GenericTable'
import { OpenPledgeOpportunityRelationshipTypes } from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenPledges/OpenPledges'

export const openOpportunityColumns: GenericTableColumns<OpenOpportunity> = [
  {
    key: 'id',
    header: 'Opportunity Guid',
    shouldRenderValue: false,
  },
  {
    key: 'planGuid',
    header: 'Plan Guid',
    shouldRenderValue: false,
  },
  {
    key: 'planName',
    header: 'Plan Name',
    shouldRenderValue: true,
  },
  {
    key: 'opportunityRelationshipFullName',
    header: 'Constituent Name',
    shouldRenderValue: true,
  },
  {
    key: 'opportunityAskAmount',
    header: 'Ask Amount',
    shouldRenderValue: true,
  },
  {
    key: 'designationName',
    header: 'Designation Name',
    shouldRenderValue: true,
  },
  {
    key: 'planType',
    header: 'Opportunity Type',
    shouldRenderValue: true,
  },
  {
    key: 'opportunityAskDate',
    header: 'Ask Date',
    shouldRenderValue: true,
  },
]

type PlanType =
  | 'Lead Annual Giving Ask'
  | 'Major Giving Ask'
  | 'Planned Giving Ask'
  | 'Principal Giving Ask'
  | 'Corporate Ask'
  | 'CFR Referral'
  | 'Peer Screening'
  | 'Foundation Ask'
  | 'Estate Administration'
  | 'Planned Giving Marketing'
  | 'MGO Stewardship'
  | 'Referral'
  | 'Signature Stewardship'
  | 'Grateful Patient'
  | 'Grateful Patient Giving Plan'
  | 'Grateful Patient Early Contact'
  | 'Grateful Patient Referral'
type OpportunityStatus =
  | 'Canceled'
  | 'Accepted'
  | 'Qualified'
  | 'Rejected'
  | 'Response pending'
  | 'Unqualified'

export type OpenOpportunity = {
  id: string | null //should never be null (will be the opportunity guid)
  planGuid: string | null
  planName: string | null
  planType: PlanType | null
  planStartDate: string | null
  designationName: string | null
  opportunityAskAmount: string | null
  opportunityAskDate: string | null
  opportunityStatus: OpportunityStatus | null
  opportunityRelationshipFullName: string | null
  opportunityRelationshipType: OpenPledgeOpportunityRelationshipTypes
}

type OpenOpportunitiesProps = {
  data: OpenOpportunity[]
} & OpenItemsTableConfig

export default function OpenOpportunities({ ...props }: OpenOpportunitiesProps) {
  return <OpenItemsTable columns={openOpportunityColumns} type={'opportunity'} {...props} />
}
