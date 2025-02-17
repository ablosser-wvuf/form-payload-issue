import React, { useEffect, useRef, useState } from 'react'

import { define, string, number, boolean, object } from '@react-form-builder/core'
import {
  characterCountToBeginSearch,
  numberOfResults,
  timeBetweenKeystrokes,
} from '@/components/custom/Form/FormEngine/fieldDescriptions'
import { Lookup } from '@/components/custom/Form/GenericFormComponents/Lookup'
import { autocompleteSearch } from '@actions/formEngineComponents/lookup/actions'
import { FormEngineLookupProps } from '@/components/custom/Form/FormEngine/FormEngine'
import CardContainer from '@/components/custom/Layout/Cards/CardContainer'
import { useQuery } from '@tanstack/react-query'
import { getFundInformationById } from '@actions/formEngineComponents/netAvailableCashLookup/actions'
import NetAvailableCashLookupInformation from '@/components/custom/Form/FormEngine/CustomFields/Lookups/NetAvailableCashLookup/NetAvailableCashLookupInformation'

const initialNetAvailableCashLookupFormEngineFieldState: NetAvailableCashLookupFormEngineFieldState =
  {
    fundGuid: '',
    fundId: '',
    fundName: '',
    // fundDescription: '',
    budgetDivision: '',
    budgetDivisionCode: '',
    unit: '',
    unitCode: '',
    department: '',
    departmentCode: '',
    netAvailableCash: '',
  }

export type NetAvailableCashLookupFormEngineFieldState = {
  fundGuid: string | null
  fundId: string | null
  fundName: string | null
  // fundDescription: string | null;
  budgetDivision: string | null
  budgetDivisionCode: string | null
  unit: string | null
  unitCode: string | null
  department: string | null
  departmentCode: string | null
  netAvailableCash: string | null
}

//add any additional props here
export type NetAvailableCashLookupProps = {
  value: NetAvailableCashLookupFormEngineFieldState
} & FormEngineLookupProps

export function NetAvailableCashLookup({
  value, ///<----- this is important. we are pulling out the value that is coming from formengine and not binding it to the input in the autocomplete component, because the
  // autocomplete component has its own internal state. we will be calling the onchange function located in <Lookup> to set the value state in formengine (by default, unless another function is passed in).
  placeholder,
  description,
  onChange,
  ...props
}: NetAvailableCashLookupProps) {
  //this allows us to clear the state of a child component that is not being controlled by a parent. we will be using it to clear the autocomplete component state just by toggling this boolean
  const [imperativelyClearState, setImperativelyClearState] = useState(false)

  const [fundId, setFundId] = useState('')

  const { isLoading, error, isError, data, refetch } = useQuery({
    queryKey: ['fund-', fundId], //constituent id is used for the cache key
    queryFn: async () => {
      return await getFundInformationById(fundId)
    },
    refetchOnWindowFocus: false,
    enabled: !!fundId,
    staleTime: Infinity,
  })

  //need to use this ref for comparison of constituent ids for the useEffect to not cause an infinite loop
  const prevFundId = useRef('')

  //we need this because we need to update the field state that is for formengine from our react query data. every time the react query data is changed (and isnt undefined) that means a new constituent has been selected from the
  //autocomplete/advanced search
  useEffect(() => {
    if (data !== undefined) {
      if (fundId !== prevFundId.current) {
        onChange?.({
          ...data,
        })

        prevFundId.current = fundId ?? ''
      }
    }
  }, [data, onChange, value, fundId])

  //auto complete selection, the value is a string that is like "104dcab0-5d8a-499a-83b7-13b5d61e45d6 - 2V155 - Alumni Association - ALA" OR an empty string '' if it was clicked again (as in to deselect the current constituent)
  function handleAutocompleteSelectionChange(autocompleteSelectionValue: string) {
    //note: this could potentially be the string value "null". if that happens react-query should handle the error when it tries to call the api with an invalid constituent id
    const fundId = autocompleteSelectionValue.split(' ')[2]

    if (fundId === '') {
      //user deselected
      setFundId('')
      prevFundId.current = ''
      onChange?.(initialNetAvailableCashLookupFormEngineFieldState)
    } else {
      setFundId(fundId ?? '')
    }
  }

  function handleInformationClear() {
    onChange?.(initialNetAvailableCashLookupFormEngineFieldState)

    setImperativelyClearState((prevState) => {
      return !prevState
    })

    setFundId('')
    prevFundId.current = ''
  }

  return (
    <CardContainer>
      <Lookup
        placeholder={placeholder ?? 'Enter a fund id, name, or 3 letter budget division code.'}
        description={description ?? `Put something here`}
        serverAction={autocompleteSearch}
        fastifyEndpointUrl={'/api/v1/form-field-lookups/fund/autocomplete'}
        uniqueSearchKey={'netAvailableCashLookup'}
        handleSelectionChange={handleAutocompleteSelectionChange}
        imperativelyClearState={imperativelyClearState}
        {...props}
      />
      <NetAvailableCashLookupInformation
        isError={isError}
        isLoading={isLoading}
        refetch={refetch}
        data={data}
        handleInformationClear={handleInformationClear}
      />
    </CardContainer>
  )
}

//optional if we need to later: https://react.dev/reference/react/memo#specifying-a-custom-comparison-function
// export default memo(FundLookup);

export const netAvailableCashLookup = define(NetAvailableCashLookup, 'NetAvailableCashLookup')
  .name('Net Available Cash Lookup')
  .category('Custom Fields')
  .props({
    id: string.required,
    label: string.required,
    placeholder: string.required,
    description: string,
    required: boolean.default(false),
    characterCountToBeginSearch: number.required.default(3).hinted(characterCountToBeginSearch),
    timeBetweenKeystrokes: number.required.default(300).hinted(timeBetweenKeystrokes),
    numberOfResults: number.required.default(10).hinted(numberOfResults),
    value: object.valued.default({
      ...initialNetAvailableCashLookupFormEngineFieldState,
    }),
  })
