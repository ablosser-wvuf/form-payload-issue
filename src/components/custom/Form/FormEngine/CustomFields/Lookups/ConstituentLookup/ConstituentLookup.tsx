import React, { useEffect, useRef, useState } from 'react'

import { boolean, define, number, object, string } from '@react-form-builder/core'
import SearchConstituent from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/SearchConstituent/SearchConstituent'
import NewConstituent from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/NewConstituent/NewConstituent'
import { getConstituentInformationById } from '@actions/formEngineComponents/constituentLookup/actions'
import { useQuery } from '@tanstack/react-query'
import ConstituentInformation, {
  ConstituentType,
  NewConstituent as NewConstituentType,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/ConstituentInformation'
import {
  characterCountToBeginSearch,
  numberOfResults,
  timeBetweenKeystrokes,
} from '@/components/custom/Form/FormEngine/fieldDescriptions'
import { NewConstituentFormSchema } from '@schemas/forms/newConstituentFormSchema'
import { Lookup } from '@/components/custom/Form/GenericFormComponents/Lookup'
import {
  OPEN_ITEM_DOES_NOT_APPLY_VALUE,
  OpenItemsType,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentInformation/OpenItems/OpenItemsTable'

import { FormEngineLookupProps } from '@/components/custom/Form/FormEngine/FormEngine'
import { autocompleteSearch } from '@actions/formEngineComponents/lookup/actions'
import { initialNewConstituentInformationData } from '@forms/newConstituent/NewConstituentForm'
import CardContainer from '@/components/custom/Layout/Cards/CardContainer'

export type HandlePledgeOpportunitySelection = (value: string, type: OpenItemsType) => void

type SelectedConstituent = {
  constituentGuid: string | null
  constituentId: string | null
  constituentName: string | null
  constituentEmail: string | null
}

type SelectedPledge = {
  pledgeGuid: string | null
  revenueId: string | null
  unit: string | null
  department: string | null
}

type SelectedOpportunity = {
  opportunityGuid: string | null
  planGuid: string | null
  planName: string | null
  planType: string | null
  planStartDate: string | null
  opportunityState: string | null
}

//if both pledge and opportunity are able to be selected then the relationship between selectedPledgeId and selectedOpportunityId is linked. both of these fields cannot have a value (like "483839390"), only 1 or the other can have a value
export type ConstituentLookupFormEngineFieldState = {
  selectedConstituent: SelectedConstituent
  selectedPledge: SelectedPledge
  selectedOpportunity: SelectedOpportunity
  newConstituent: NewConstituentFormSchema
}

const initialConstituentLookupFormEngineFieldState: ConstituentLookupFormEngineFieldState = {
  selectedConstituent: {
    constituentGuid: '',
    constituentId: '',
    constituentName: '',
    constituentEmail: '',
  },
  selectedPledge: {
    pledgeGuid: '',
    revenueId: '',
    unit: '',
    department: '',
  },
  selectedOpportunity: {
    opportunityGuid: '',
    planGuid: '',
    planName: '',
    planType: '',
    planStartDate: '',
    opportunityState: '',
  },
  newConstituent: {
    ...initialNewConstituentInformationData,
  },
}

export type ConstituentLookupProps = {
  value: ConstituentLookupFormEngineFieldState
  allowNewConstituent: boolean
  includePledgeInformationTable: boolean
  includeOpportunityInformationTable: boolean
} & FormEngineLookupProps

//i am doing a lot of shallow merging here for "ConstituentLookupFormEngineFieldState". i think it is ok? if not grab a deep merge function from lodash or something
export function ConstituentLookup({
  allowNewConstituent,
  includePledgeInformationTable,
  includeOpportunityInformationTable,
  onChange,
  placeholder,
  description,
  value, ///<----- this is important. we are pulling out the value that is coming from formengine and not binding it to any input fields because we are using the autocomplete component which
  //  has its own internal state, and also because the value is not of the usual browser text input of type string but a more complex object (see type ConstituentLookupFormEngineFieldState)
  //  we will be overriding the default handleSelectionChange in <Lookup> by passing our own (see handleAutocompleteSelectionChange) to set the value
  ...props
}: ConstituentLookupProps) {
  //there is probably a better way to do this but i kept running into issues determining the correct component state when i needed to know if the user selected a constituent from the search or added a new one
  const [isInLookupMode, setIsInLookupMode] = useState(true)

  //this allows us to clear the state of a child component that is not being controlled by a parent. we will be using it to clear the autocomplete component state just by toggling this boolean
  const [imperativelyClearState, setImperativelyClearState] = useState(false)

  const [constituentId, setConstituentId] = useState('')

  const { isLoading, error, isError, data, refetch } = useQuery({
    queryKey: ['constituent-', constituentId], //constituent id is used for the cache key
    queryFn: async () => {
      return await getConstituentInformationById(constituentId)
    },
    refetchOnWindowFocus: false,
    enabled: !!constituentId,
    staleTime: Infinity,
  })

  //need to use this ref for comparison of constituent ids for the useEffect to not cause an infinite loop
  const prevConstituentId = useRef('')

  //we need this because we need to update the field state that is for formengine from our react query data. every time the react query data is changed (and isnt undefined) that means a new constituent has been selected from the
  //autocomplete/advanced search
  useEffect(() => {
    if (data !== undefined) {
      if (constituentId !== prevConstituentId.current) {
        const constituentData = {
          constituentGuid: data.constituentGuid,
          constituentId: data.constituentId,
          constituentName: data.fullName,
          constituentEmail: data.email,
        }

        onChange?.({
          ...value,
          selectedConstituent: constituentData,
        })

        prevConstituentId.current = constituentId ?? ''
      }
    }
  }, [data, onChange, value, constituentId])

  //auto complete selection, the value is a string that is like "700972025 - Mr. John Smith - @jsmith@wvuf.org" OR an empty string '' if it was clicked again (as in to deselect the current constituent)
  function handleAutocompleteSelectionChange(autocompleteSelectionValue: string) {
    //note: this could potentially be the string value "null". if that happens react-query should handle the error when it tries to call the api with an invalid constituent id
    const constituentId = autocompleteSelectionValue.split(' ')[0]

    if (constituentId === '') {
      //user deselected
      setConstituentId('')
      prevConstituentId.current = ''
      onChange?.(initialConstituentLookupFormEngineFieldState)
    } else {
      setConstituentId(constituentId || '') // Handle potential undefined case by providing empty string default
    }
  }

  //selected constituent from search. selectedConstituentId should be the constituent id or the string "null"
  function handleAdvancedConstituentSearchSelection(selectedConstituentId: string) {
    setConstituentId(selectedConstituentId)

    setImperativelyClearState((prevState) => {
      return !prevState
    })
  }

  //adding a new constituent
  function handleNewConstituentAdd(newConstituentInformation: NewConstituentFormSchema) {
    setIsInLookupMode(false)

    setImperativelyClearState((prevState) => {
      return !prevState
    })

    const updatedValues = {
      ...initialConstituentLookupFormEngineFieldState,
      newConstituent: newConstituentInformation,
    } //clear any previous state from the lookup

    setConstituentId('')
    onChange?.(updatedValues)
    prevConstituentId.current = ''
  }

  //basically reset the state of everything
  function handleConstituentInformationClear() {
    onChange?.(initialConstituentLookupFormEngineFieldState)

    setImperativelyClearState((prevState) => {
      return !prevState
    })

    setConstituentId('')
    setIsInLookupMode(true)
    prevConstituentId.current = ''
  }

  //update state depending on what the user picked on the table(s)
  //selectedGuid is not the best name- it is either the selected guid OR the value from this constant OPEN_ITEM_DOES_NOT_APPLY_VALUE
  function handlePledgeOpportunitySelection(selectedGuid: string, type: OpenItemsType) {
    if (selectedGuid === 'Something went wrong') {
      console.error(
        `Received a null guid from either a pledge or opportunity. This happened on constituent ${data?.constituentId}. Please confirm the table in snowflake is returning valid data for this constituent.`,
      )
      return
    }

    if (type === 'pledge') {
      let selectedPledgeValue: SelectedPledge

      if (selectedGuid === OPEN_ITEM_DOES_NOT_APPLY_VALUE) {
        selectedPledgeValue = {
          pledgeGuid: OPEN_ITEM_DOES_NOT_APPLY_VALUE,
          revenueId: '',
          unit: '',
          department: '',
        }
      } else {
        const pledgeValue = data?.openPledges.find((pledge) => {
          return pledge.id === selectedGuid
        })

        selectedPledgeValue = {
          pledgeGuid: pledgeValue?.id ?? '',
          revenueId: pledgeValue?.revenueId ?? '',
          unit: pledgeValue?.pledgeUnit ?? '',
          department: pledgeValue?.pledgeDepartment ?? '',
        }
      }

      let doesSelectedOpportunityHaveAnyValues = false

      if (
        Object.values(value.selectedOpportunity).filter((valueToFilter) => {
          return valueToFilter !== ''
        }).length > 0
      ) {
        doesSelectedOpportunityHaveAnyValues = true
      }

      const updatedValues = {
        ...value,
        selectedPledge: selectedPledgeValue,
        ...(!doesSelectedOpportunityHaveAnyValues
          ? {
              selectedOpportunity: {
                ...value.selectedOpportunity,
                opportunityGuid: OPEN_ITEM_DOES_NOT_APPLY_VALUE,
              },
            }
          : {}),
      }

      onChange?.(updatedValues)
    } else if (type === 'opportunity') {
      let selectedOpportunityValue: SelectedOpportunity

      if (selectedGuid === OPEN_ITEM_DOES_NOT_APPLY_VALUE) {
        selectedOpportunityValue = {
          opportunityGuid: OPEN_ITEM_DOES_NOT_APPLY_VALUE,
          planGuid: '',
          planName: '',
          planType: '',
          planStartDate: '',
          opportunityState: '',
        }
      } else {
        const opportunityValue = data?.openOpportunities.find((opportunity) => {
          return opportunity.id === selectedGuid
        })

        selectedOpportunityValue = {
          opportunityGuid: opportunityValue?.id ?? '',
          planGuid: opportunityValue?.planGuid ?? '',
          planName: opportunityValue?.planName ?? '',
          planType: opportunityValue?.planType ?? '',
          planStartDate: opportunityValue?.planStartDate ?? '',
          opportunityState: opportunityValue?.opportunityStatus ?? '',
        }
      }

      let doesSelectedPledgeHaveAnyValues = false

      if (
        Object.values(value.selectedPledge).filter((valueToFilter) => {
          return valueToFilter !== ''
        }).length > 0
      ) {
        doesSelectedPledgeHaveAnyValues = true
      }

      const updatedValues = {
        ...value,
        selectedOpportunity: selectedOpportunityValue,
        ...(!doesSelectedPledgeHaveAnyValues
          ? {
              selectedPledge: {
                ...value.selectedPledge,
                pledgeGuid: OPEN_ITEM_DOES_NOT_APPLY_VALUE,
              },
            }
          : {}),
      }

      onChange?.(updatedValues)
    }
  }

  //if both pledge and opportunity tables are enabled, we need to add functionality to disable one or the other. the user cannot both select an open pledge and an open opportunity at the same time
  function handlePledgeOpportunityTableDisable(type: OpenItemsType): boolean {
    if (
      value.selectedOpportunity.opportunityGuid === null ||
      value.selectedPledge.pledgeGuid === null
    ) {
      //disable table if either one of these are null. something went wrong in the database and needs to be cleaned up first
      return true
    }

    if (includePledgeInformationTable && includeOpportunityInformationTable) {
      if (
        type === 'pledge' &&
        value.selectedOpportunity.opportunityGuid !== OPEN_ITEM_DOES_NOT_APPLY_VALUE &&
        value.selectedOpportunity.opportunityGuid !== ''
      ) {
        return true
      } else if (
        type === 'opportunity' &&
        value.selectedPledge.pledgeGuid !== OPEN_ITEM_DOES_NOT_APPLY_VALUE &&
        value.selectedPledge.pledgeGuid !== ''
      ) {
        return true
      }
    }

    return false
  }

  let newConstituentData: NewConstituentType

  if (!isInLookupMode) {
    newConstituentData = {
      ...value.newConstituent,
      type: ConstituentType.New,
    }
  } else {
    newConstituentData = {
      ...initialNewConstituentInformationData,
      type: ConstituentType.New,
    }
  }

  return (
    <CardContainer>
      <Lookup
        placeholder={
          placeholder ?? 'Enter a lookup ID, name, or email address; or use the advanced search.'
        }
        description={
          description ??
          `If you can't find the right person or organization, they may not be in the database yet.${allowNewConstituent ? ' Click New to add them.' : ''}`
        }
        handleSelectionChange={handleAutocompleteSelectionChange}
        disabled={!isInLookupMode || isLoading || isError}
        imperativelyClearState={imperativelyClearState}
        uniqueSearchKey={'constituentLookup'} //the unique key for the autocomplete
        serverAction={autocompleteSearch}
        fastifyEndpointUrl={'/api/v1/form-field-lookups/constituent/autocomplete'}
        {...props}
      >
        <SearchConstituent
          disabled={!isInLookupMode || isLoading || isError}
          handleAdvancedConstituentSearchSelection={handleAdvancedConstituentSearchSelection}
        />
        {allowNewConstituent && (
          <NewConstituent
            newConstituentInformation={value.newConstituent}
            handleNewConstituentAdd={handleNewConstituentAdd}
            disabled={isLoading || isError}
          />
        )}
      </Lookup>
      <ConstituentInformation
        isError={isError}
        isLoading={isLoading}
        refetch={refetch}
        handleConstituentInformationClear={handleConstituentInformationClear}
        constituentData={isInLookupMode ? data : newConstituentData}
        isInLookupMode={isInLookupMode}
        includePledgeInformationTable={includePledgeInformationTable}
        includeOpportunityInformationTable={includeOpportunityInformationTable}
        handlePledgeOpportunitySelection={handlePledgeOpportunitySelection}
        handlePledgeOpportunityTableDisable={handlePledgeOpportunityTableDisable}
        value={value}
      />
    </CardContainer>
  )
}

//optional if we need to later: https://react.dev/reference/react/memo#specifying-a-custom-comparison-function
// export default memo(ConstituentLookup);

export const constituentLookup = define(ConstituentLookup, 'ConstituentLookup')
  .name('Constituent Lookup')
  .category('Custom Fields')
  .props({
    id: string.required, //ideally i get this from the form builder somehow since they already generate a unique id. this would be something to ask the support team or whatever if we ever talk to them
    label: string.required,
    placeholder: string,
    description: string,
    required: boolean.default(false),
    characterCountToBeginSearch: number.required.default(3).hinted(characterCountToBeginSearch),
    timeBetweenKeystrokes: number.required.default(300).hinted(timeBetweenKeystrokes),
    numberOfResults: number.required.default(10).hinted(numberOfResults),
    allowNewConstituent: boolean
      .default(false)
      .hinted(
        'Instead of searching for an already existing constituent, give the user the option to add a new one.',
      ),
    includePledgeInformationTable: boolean
      .default(false)
      .hinted(
        'Show open pledges for the constituent and their relationships as a table where the user must select a value.',
      ),
    includeOpportunityInformationTable: boolean
      .default(false)
      .hinted(
        'Show open opportunities for the constituent and their relationships as a table where the user must select a value.',
      ),
    value: object.valued.default({
      selectedConstituent: {
        constituentGuid: '',
        constituentId: '',
        constituentName: '',
        constituentEmail: '',
      },
      selectedPledge: {
        pledgeGuid: '',
        revenueId: '',
        unit: '',
        department: '',
      },
      selectedOpportunity: {
        opportunityGuid: '',
        planGuid: '',
        planName: '',
        planType: '',
        planStartDate: '',
        opportunityState: '',
      },
      newConstituent: {
        ...initialNewConstituentInformationData,
      },
    }),
  })
