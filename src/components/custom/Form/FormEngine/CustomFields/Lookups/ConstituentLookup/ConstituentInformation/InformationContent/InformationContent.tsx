import React, { PropsWithChildren, ReactNode } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CircleDollarSign, CircleUser, CircleX, Notebook, NotebookText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  ConstituentCrmTypes,
  ConstituentType,
  degreeInformationColumns,
  NewConstituent,
  openRelationshipColumns,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/ConstituentInformation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { openOpportunityColumns } from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenOpportunities/OpenOpportunities'
import { openPledgeColumns } from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenPledges/OpenPledges'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { GenericTable } from '@/components/custom/Table/GenericTable'
import TableCard from '@/components/custom/Layout/Cards/TableCard'

export const NULL_VALUE = 'No Data'

type InformationContentProps = {
  constituentInformation: ConstituentCrmTypes | NewConstituent
  isInLookupMode: boolean
  handleConstituentInformationClear: () => void
}

//todo: fix/change/update this when we figure out what all fields we will allow for new constituents
export default function InformationContent({
  constituentInformation,
  isInLookupMode,
  handleConstituentInformationClear,
}: InformationContentProps) {
  let relationshipContent = <></>

  if (
    constituentInformation.type !== ConstituentType.New &&
    constituentInformation.relationships.length > 0
  ) {
    relationshipContent = (
      <PopoverWrapper
        buttonLabel={
          <>
            <CircleUser />
            {`Relationships (${constituentInformation.relationships.length})`}
          </>
        }
      >
        <GenericTable
          data={constituentInformation.relationships}
          columns={openRelationshipColumns}
        />
      </PopoverWrapper>
    )
  }

  let pledgeContent = <></>

  if (
    constituentInformation.type !== ConstituentType.New &&
    constituentInformation.openPledges.length > 0
  ) {
    pledgeContent = (
      <PopoverWrapper
        buttonLabel={
          <>
            <CircleDollarSign />
            {`Open Pledges (${constituentInformation.openPledges.length})`}
          </>
        }
      >
        <GenericTable data={constituentInformation.openPledges} columns={openPledgeColumns} />
      </PopoverWrapper>
    )
  }

  let opportunityContent = <></>

  if (
    constituentInformation.type !== ConstituentType.New &&
    constituentInformation.openOpportunities.length > 0
  ) {
    opportunityContent = (
      <PopoverWrapper
        buttonLabel={
          <>
            <Notebook />
            {`Open Opportunities (${constituentInformation.openOpportunities.length})`}
          </>
        }
      >
        <GenericTable
          data={constituentInformation.openOpportunities}
          columns={openOpportunityColumns}
        />
      </PopoverWrapper>
    )
  }

  let otherContent = <></>

  if (constituentInformation.type === 'Individual') {
    otherContent = (
      <PopoverWrapper
        buttonLabel={
          <>
            <NotebookText />
            {`Other Information`}
          </>
        }
      >
        <div className={'flex flex-col gap-3'}>
          <div>
            <div>{`Alias(es): ${constituentInformation.otherInformation.alias ?? NULL_VALUE}`}</div>
            <div>
              {`Nickname: ${constituentInformation.otherInformation.nickname ?? NULL_VALUE}`}
            </div>
            <div>
              {`Date of Birth: ${constituentInformation.otherInformation.dateOfBirth ?? NULL_VALUE}`}
            </div>
            <div>{`Gender: ${constituentInformation.otherInformation.gender ?? NULL_VALUE}`}</div>
          </div>
          <TableCard
            cardHeader={
              <CardHeader>
                <CardTitle className={'text-lg font-bold'}>Degree Information</CardTitle>
                <CardDescription>Degree information for the selected constituent.</CardDescription>
              </CardHeader>
            }
          >
            {constituentInformation.otherInformation.degreeInformation && (
              <GenericTable
                data={constituentInformation.otherInformation.degreeInformation}
                columns={degreeInformationColumns}
                caption={'A list of degree information of the constituent.'}
              />
            )}
          </TableCard>
        </div>
      </PopoverWrapper>
    )
  }

  return (
    <Card>
      <CardContent className={'p-6'}>
        <div className={'flex justify-between gap-5'}>
          <div className={'flex flex-wrap gap-4'}>
            <div className={'flex flex-col gap-2'}>
              {' '}
              {/* information */}
              <div
                className={'text-lg font-bold'}
              >{`You have ${isInLookupMode ? 'selected' : 'added'} the constituent with the following information:`}</div>
              {constituentInformation.type === 'Individual' && constituentInformation.deceased && (
                <div>
                  <Badge className={'pointer-events-none'} variant="destructive">
                    Deceased
                  </Badge>
                </div>
              )}
              {constituentInformation.type === 'New Constituent' ? (
                <RenderNewConstituent constituent={constituentInformation} />
              ) : (
                <RenderConstituent constituent={constituentInformation} />
              )}
            </div>
            <div className={'flex items-end'}>
              {' '}
              {/* buttons */}
              <div className={'flex gap-3 items-center flex-wrap'}>
                {relationshipContent}
                {pledgeContent}
                {opportunityContent}
                {otherContent}
              </div>
            </div>
          </div>
          <div>
            <Button
              variant={'destructive'}
              type={'button'}
              title={'Remove'}
              onClick={() => {
                handleConstituentInformationClear()
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

//--radix-popover-content-transform-origin
//--radix-popover-content-available-width

type ButtonContentProps = {
  buttonLabel: ReactNode
} & PropsWithChildren

function PopoverWrapper({ buttonLabel, children }: ButtonContentProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">{buttonLabel}</Button>
      </PopoverTrigger>
      <PopoverContent className={'flex w-fit max-w-[90vw] mx-5'}>
        <ScrollArea className={'flex'}>
          {children}
          <ScrollBar orientation="horizontal" className={''} />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

type RenderConstituentProps = {
  constituent: ConstituentCrmTypes
}

function RenderConstituent({ constituent }: RenderConstituentProps) {
  let constituentContent = (
    <>
      <div className="font-semibold">Constituent</div>
      <div>{`Id: ${constituent.constituentId ?? NULL_VALUE}`}</div>
      <div>{`Name: ${constituent.fullName ?? NULL_VALUE}`}</div>
      <div>{`Email: ${constituent.email ?? NULL_VALUE}`}</div>
      <div>{`Phone: ${constituent.phone ?? NULL_VALUE}`}</div>
      <div>{`Manager: ${constituent.prospectManager ?? NULL_VALUE}`}</div>
    </>
  )

  let addressContent = (
    <>
      <div className="font-semibold">Address</div>
      <div>{`Street: ${constituent.addressStreet ?? NULL_VALUE}`}</div>
      <div>{`City: ${constituent.addressCity ?? NULL_VALUE}`}</div>
      <div>{`State: ${constituent.addressState ?? NULL_VALUE}`}</div>
      <div>{`Zip: ${constituent.addressZip ?? NULL_VALUE}`}</div>
    </>
  )

  return (
    <div className={'flex flex-wrap gap-6'}>
      <div className="flex flex-col">{constituentContent}</div>
      <div className={'flex flex-col'}>{addressContent}</div>
    </div>
  )
}

type RenderNewConstituentProps = {
  constituent: NewConstituent
}

function RenderNewConstituent({ constituent }: RenderNewConstituentProps) {
  let constituentContent = (
    <>
      <div className="font-semibold">Constituent</div>
      <div>{`Name: ${constituent.firstName} ${constituent.lastName}`}</div>
      <div>{`Email: ${constituent.email.length > 0 ? constituent.email : NULL_VALUE}`}</div>
      <div>{`Phone: ${constituent.phone.length > 0 ? constituent.phone : NULL_VALUE}`}</div>
    </>
  )

  let addressContent = (
    <>
      <div className="font-semibold">Address</div>
      <div>{`Address: ${constituent.address}`}</div>
      <div>{`Other: ${constituent.other.length > 0 ? constituent.other : NULL_VALUE}`}</div>
    </>
  )

  return (
    <div className={'flex flex-wrap gap-6'}>
      <div className="flex flex-col">{constituentContent}</div>
      <div className={'flex flex-col'}>{addressContent}</div>
    </div>
  )
}
