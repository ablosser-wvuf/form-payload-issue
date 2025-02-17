import React from 'react'

import { define, string, number, boolean } from '@react-form-builder/core'
import {
  characterCountToBeginSearch,
  numberOfResults,
  timeBetweenKeystrokes,
} from '@/components/custom/Form/FormEngine/fieldDescriptions'
import { Lookup } from '@/components/custom/Form/GenericFormComponents/Lookup'
import { autocompleteSearch } from '@actions/formEngineComponents/lookup/actions'
import { FormEngineLookupProps } from '@/components/custom/Form/FormEngine/FormEngine'

//add any additional props here
export type FundLookupProps = {
  value: string
} & FormEngineLookupProps

export function FundLookup({
  value, ///<----- this is important. we are pulling out the value that is coming from formengine and not binding it to the input in the autocomplete component, because the
  // autocomplete component has its own internal state. we will be calling the onchange function located in <Lookup> to set the value state in formengine.
  ...props
}: FundLookupProps) {
  return (
    <Lookup
      serverAction={autocompleteSearch}
      fastifyEndpointUrl={'/api/v1/form-field-lookups/fund/autocomplete'}
      uniqueSearchKey={'fundLookup'}
      {...props}
    />
  )
}

//optional if we need to later: https://react.dev/reference/react/memo#specifying-a-custom-comparison-function
// export default memo(FundLookup);

export const fundLookup = define(FundLookup, 'FundLookup')
  .name('Fund Lookup')
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
    value: string.valued.default(''),
  })
