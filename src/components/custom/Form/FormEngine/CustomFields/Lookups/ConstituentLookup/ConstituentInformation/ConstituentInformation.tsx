import React from 'react'
import OpenPledges, {
  OpenPledge,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenPledges/OpenPledges'
import OpenOpportunities, {
  OpenOpportunity,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenOpportunities/OpenOpportunities'
import { NewConstituentFormSchema } from '@schemas/forms/newConstituentFormSchema'
import InformationContent from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/InformationContent/InformationContent'
import {
  ConstituentLookupFormEngineFieldState,
  HandlePledgeOpportunitySelection,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentLookup'
import { OpenItemsType } from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenItemsTable'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { GenericTableColumns } from '@/components/custom/Table/GenericTable'
import RefetchAlertError from '@/components/custom/Form/GenericFormComponents/RefetchAlertError'
import {
  AvatarInformationSkeletonLoader,
  InformationSkeletonLoader,
} from '@/components/custom/SkeletonLoaders/SkeletonLoaders'

type RelationshipType =
  | 'Former Employee'
  | 'Subsidiary'
  | 'Spouse'
  | 'Individual'
  | 'Historical Link'
  | 'Owner'
  | 'Parent Company'
  | 'Historical Recognition'
  | 'Contact'
  | 'PAC Contributor'
  | 'Donor Advised Fund'
  | 'PAC Account Holder'
  | 'Retiree'
  | 'Donor'
  | 'Sibling'
  | 'Former Spouse'
  | 'Estate'
  | 'Reporting Contact'
  | 'Contingent Beneficiary'
  | 'Primary Player'
  | 'Grandparent'
  | 'Fund'
  | 'Primary Record'
  | 'Parent'
  | 'Spouse/Partner'
  | 'Attorney'
  | 'Board Member'
  | 'Matching Gift'
  | 'Historical LinkO'
  | 'Power of Attorney'
  | 'Employer'
  | 'Organization'
  | 'Foundation'
  | 'Retired'
  | 'Former Employer'
  | 'Tribute'
  | 'Former Contact'
  | 'Executor'
  | 'Trustee'
  | 'Extended Family'
  | 'Partner'
  | 'Financial Advisor'
  | 'Accountant'
  | 'Business'
  | 'Parent Organization'
  | 'Beneficiary'
  | 'Former Primary Entity'
  | 'Budget Officer'
  | 'Employee'
  | 'Parent Corporation'
  | 'Trust'
  | 'Grandchild'
  | 'Other'
  | 'Funder'
  | 'Step-parent'
  | 'Unknown'
  | 'Primary Entity'
  | 'Friend'
  | 'Treasurer'
  | 'Child'
  | 'Step-child'

export type Relationships = {
  id: string | null //will be a guid
  relationshipConstituentId: string | null
  relationshipType: RelationshipType | null
  relationshipFullName: string | null
  relationshipAddressFull: string | null
  relationshipEmail: string | null
  relationshipPhone: string | null
}

export const openRelationshipColumns: GenericTableColumns<Relationships> = [
  {
    key: 'id',
    header: 'Relationship Guid',
    shouldRenderValue: false,
  },
  {
    key: 'relationshipConstituentId',
    header: 'Constituent Id',
    shouldRenderValue: true,
  },
  {
    key: 'relationshipFullName',
    header: 'Name',
    shouldRenderValue: true,
  },
  {
    key: 'relationshipEmail',
    header: 'Email',
    shouldRenderValue: true,
  },
  {
    key: 'relationshipPhone',
    header: 'Phone',
    shouldRenderValue: true,
  },
  {
    key: 'relationshipType',
    header: 'Relationship Type',
    shouldRenderValue: true,
  },
  {
    key: 'relationshipAddressFull',
    header: 'Address',
    shouldRenderValue: true,
  },
]

export type DegreeInformation = {
  id: string | null //will be a guid
  name: string | null
  major: string | null
  college: string | null
  classOf: string | null
}

export const degreeInformationColumns: GenericTableColumns<DegreeInformation> = [
  {
    key: 'id',
    header: 'Degree Guid',
    shouldRenderValue: false,
  },
  {
    key: 'name',
    header: 'Name',
    shouldRenderValue: true,
  },
  {
    key: 'major',
    header: 'Major',
    shouldRenderValue: true,
  },
  {
    key: 'college',
    header: 'College',
    shouldRenderValue: true,
  },
  {
    key: 'classOf',
    header: 'Class Of',
    shouldRenderValue: true,
  },
]

export type OtherInformation = {
  degreeInformation: DegreeInformation[] | null
  nickname: string | null
  alias: string | null
  dateOfBirth: string | null
  gender: string | null
}

export type ConstituentCrmTypes = ConstituentIndividual | ConstituentOrganization | ConstituentGroup

type ConstituentFields = {
  constituentGuid: string | null
  constituentId: string | null
  fullName: string | null
  email: string | null
  phone: string | null
  prospectManager: string | null
  addressStreet: string | null
  addressCity: string | null
  addressState: string | null
  addressZip: string | null
  openPledges: OpenPledge[]
  openOpportunities: OpenOpportunity[]
  relationships: Relationships[]
}

type ConstituentIndividual = {
  deceased: boolean | null
  otherInformation: OtherInformation
  type: ConstituentType.Individual | null
} & ConstituentFields

type ConstituentOrganization = {
  type: ConstituentType.Organization | null
} & ConstituentFields

type ConstituentGroup = {
  type: ConstituentType.Group | null
} & ConstituentFields

export type NewConstituent = {
  type: ConstituentType.New //this cant be null because it will not being coming from the api/database
} & NewConstituentFormSchema

export enum ConstituentType {
  'Individual' = 'Individual',
  'Organization' = 'Organization',
  'Group' = 'Group',
  'New' = 'New Constituent',
}

type ConstituentInformationProps<T> = {
  isError: boolean
  isLoading: boolean
  constituentData: ConstituentCrmTypes | undefined | NewConstituent | ''
  handleConstituentInformationClear: () => void
  includePledgeInformationTable: boolean
  includeOpportunityInformationTable: boolean
  isInLookupMode: boolean
  handlePledgeOpportunitySelection: HandlePledgeOpportunitySelection
  handlePledgeOpportunityTableDisable?: (type: OpenItemsType) => boolean
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<T, Error>>
  value: ConstituentLookupFormEngineFieldState
}

export default function ConstituentInformation<T>({
  isError,
  isLoading,
  refetch,
  constituentData,
  handleConstituentInformationClear,
  includePledgeInformationTable,
  includeOpportunityInformationTable,
  isInLookupMode,
  handlePledgeOpportunitySelection,
  handlePledgeOpportunityTableDisable,
  value,
}: ConstituentInformationProps<T>) {
  // isError = true; //testing error state

  let constituentInformationContent = <AvatarInformationSkeletonLoader showAnimation={false} />

  let openPledgesContent = (
    <>
      {isInLookupMode && includePledgeInformationTable && (
        <InformationSkeletonLoader showAnimation={false} />
      )}
    </>
  )
  let openOpportunitiesContent = (
    <>
      {isInLookupMode && includeOpportunityInformationTable && (
        <InformationSkeletonLoader showAnimation={false} />
      )}
    </>
  )

  if (isError) {
    constituentInformationContent = (
      <RefetchAlertError
        refetch={refetch}
        errorText={`Something went wrong and the constituent was not added. Please try again.`}
      />
    )

    //remove both pledges and opportunities
    openPledgesContent = (
      <>
        {/*{isInLookupMode && includePledgeInformationTable &&*/}
        {/*    <InformationTableSkeletonLoader showAnimation={false}/>}*/}
      </>
    )

    openOpportunitiesContent = (
      <>
        {/*{isInLookupMode && includeOpportunityInformationTable &&*/}
        {/*    <InformationTableSkeletonLoader showAnimation={false}/>}*/}
      </>
    )
  }

  if (isLoading) {
    constituentInformationContent = <AvatarInformationSkeletonLoader showAnimation={true} />

    openPledgesContent = (
      <>
        {isInLookupMode && includePledgeInformationTable && (
          <InformationSkeletonLoader showAnimation={true} />
        )}
      </>
    )

    openOpportunitiesContent = (
      <>
        {isInLookupMode && includeOpportunityInformationTable && (
          <InformationSkeletonLoader showAnimation={true} />
        )}
      </>
    )
  }

  //if we have data
  if (!!constituentData) {
    constituentInformationContent = (
      <InformationContent
        constituentInformation={constituentData}
        isInLookupMode={isInLookupMode}
        handleConstituentInformationClear={handleConstituentInformationClear}
      />
    )

    openPledgesContent = (
      <>
        {isInLookupMode &&
          includePledgeInformationTable &&
          constituentData.type !== ConstituentType.New &&
          constituentData.openPledges.length > 0 && (
            <OpenPledges
              data={constituentData.openPledges}
              constituentLookupStateValue={value}
              handlePledgeOpportunityTableDisable={handlePledgeOpportunityTableDisable}
              handlePledgeOpportunitySelection={handlePledgeOpportunitySelection}
            />
          )}
      </>
    )

    openOpportunitiesContent = (
      <>
        {isInLookupMode &&
          includeOpportunityInformationTable &&
          constituentData.type !== ConstituentType.New &&
          constituentData.openOpportunities.length > 0 && (
            <OpenOpportunities
              data={constituentData.openOpportunities}
              constituentLookupStateValue={value}
              handlePledgeOpportunityTableDisable={handlePledgeOpportunityTableDisable}
              handlePledgeOpportunitySelection={handlePledgeOpportunitySelection}
            />
          )}
      </>
    )
  }

  return (
    <>
      {constituentInformationContent}
      {openPledgesContent}
      {openOpportunitiesContent}
    </>
  )
}

// type InformationErrorProps = {
//     refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<ConstituentCrmTypes, Error>>;
// }
//
// //trying to fix the stupid positioning of the button on smaller screens
// function InformationError({refetch}: InformationErrorProps) {
//
//     return (
//         // <Card>
//         //     <CardContent className={"p-6"}>
//         <>
//             {/*<Alert className={"relative"} variant="destructive">*/}
//             {/*    <AlertCircle className="h-4 w-4"/>*/}
//             {/*    <AlertTitle>Error</AlertTitle>*/}
//             {/*    <AlertDescription>*/}
//             {/*        Something went wrong and the constituent was not added. Please try again.*/}
//             {/*    </AlertDescription>*/}
//             {/*    <Button className={"!px-4 absolute top-2 right-2"} variant={"destructive"}*/}
//             {/*            title={"Try Again"}*/}
//             {/*            onClick={() => {*/}
//             {/*                refetch();*/}
//             {/*            }}>*/}
//             {/*        <RotateCcw/>Try Again*/}
//             {/*    </Button>*/}
//             {/*</Alert>*/}
//
//
//             {/* tweaked alert component to allow the button to always be positioned on right so it doesnt overlap alert description text */}
//             <Alert className={"flex justify-between gap-2"} variant="destructive">
//                 <div
//                     className={"[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-destructive"}>
//                     <AlertCircle className="h-4 w-4 mr-2"/>
//                     <AlertTitle>Error</AlertTitle>
//                     <AlertDescription>
//                         Something went wrong and the constituent was not added. Please try again.
//                     </AlertDescription>
//                 </div>
//                 {/*<div className={""}>*/}
//                 <Button variant={"destructive"}
//                         title={"Try Again"}
//                         onClick={() => {
//                             refetch();
//                         }}>
//                     <RotateCcw/>Try Again
//                 </Button>
//                 {/*</div>*/}
//             </Alert>
//         </>
// //     </CardContent>
// // </Card>
//     );
// }
