'use client'

import React, { useCallback, useState } from 'react'
import {
  ConstituentLookup,
  ConstituentLookupFormEngineFieldState,
  ConstituentLookupProps,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/ConstituentLookup/ConstituentLookup'
import {
  FundLookup,
  FundLookupProps,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/FundLookup/FundLookup'
import {
  VendorLookup,
  VendorLookupProps,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/VendorLookup/VendorLookup'
import {
  TributeLookup,
  TributeLookupProps,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/TributeLookup/TributeLookup'
import { initialNewConstituentInformationData } from '@forms/newConstituent/NewConstituentForm'
import {
  NetAvailableCashLookup,
  NetAvailableCashLookupFormEngineFieldState,
  NetAvailableCashLookupProps,
} from '@/components/custom/Form/FormEngine/CustomFields/Lookups/NetAvailableCashLookup/NetAvailableCashLookup'

type ClientWrapperProps = {}

const testConstituentLookupProps: ConstituentLookupProps = {
  id: '1',
  label: 'Constituent Lookup Test',
  // placeholder: "",
  // description: "",
  required: true,
  characterCountToBeginSearch: 3,
  timeBetweenKeystrokes: 3000,
  numberOfResults: 20,
  allowNewConstituent: true,
  includePledgeInformationTable: true,
  includeOpportunityInformationTable: true,
  value: {
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
  },
  onChange: () => {},
}

const testNetAvailableCashLookupProps: NetAvailableCashLookupProps = {
  id: '2',
  label: 'Net Available Cash Lookup Test',
  placeholder: 'Net Available Cash Lookup',
  description: '',
  required: true,
  characterCountToBeginSearch: 3,
  timeBetweenKeystrokes: 3000,
  numberOfResults: 10,
  value: {
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
  },
  onChange: () => {},
}

const testFundLookupProps: FundLookupProps = {
  id: '3',
  label: 'Fund Lookup Test',
  placeholder: 'Fund Lookup',
  description: '',
  required: true,
  characterCountToBeginSearch: 3,
  timeBetweenKeystrokes: 3000,
  numberOfResults: 10,
  value: '',
  onChange: () => {},
}

const testVendorLookupProps: VendorLookupProps = {
  id: '4',
  label: 'Vendor Lookup Test',
  placeholder: 'Vendor Lookup',
  description: 'hello gov',
  required: true,
  characterCountToBeginSearch: 3,
  timeBetweenKeystrokes: 3000,
  numberOfResults: 10,
  value: '',
  onChange: () => {},
}

const testTributeLookupProps: TributeLookupProps = {
  id: '5',
  label: 'Tribute Lookup Test',
  placeholder: 'Tribute Lookup',
  description: '',
  required: true,
  characterCountToBeginSearch: 3,
  timeBetweenKeystrokes: 3000,
  numberOfResults: 10,
  value: '',
  onChange: () => {},
}

//i dont think this component does what i think it does...
export default function TestFormengineAutocompleteComponents({}: ClientWrapperProps) {
  const [testConstituentLookupValue, setTestConstituentLookupValueValue] = useState(
    testConstituentLookupProps.value,
  )

  const [rerender, setRerender] = useState(false)

  const handleConstituentLookupValueChange = useCallback(
    (value: ConstituentLookupFormEngineFieldState) => {
      console.log('the value that formengine will have for this component is:', value) //seeing what the actual value will be
      setTestConstituentLookupValueValue(value)
    },
    [],
  )

  const handleOnChange = useCallback((value: any) => {
    console.log('the value that formengine will have for this component is:', value) //seeing what the actual value will be
    setRerender((prevState) => {
      return !prevState
    })
  }, [])

  return (
    <>
      <ConstituentLookup
        {...testConstituentLookupProps}
        onChange={handleConstituentLookupValueChange}
        value={testConstituentLookupValue}
      />
      <NetAvailableCashLookup {...testNetAvailableCashLookupProps} onChange={handleOnChange} />
      <FundLookup {...testFundLookupProps} onChange={handleOnChange} />
      <VendorLookup {...testVendorLookupProps} onChange={handleOnChange} />
      <TributeLookup {...testTributeLookupProps} onChange={handleOnChange} />
    </>
  )
}
