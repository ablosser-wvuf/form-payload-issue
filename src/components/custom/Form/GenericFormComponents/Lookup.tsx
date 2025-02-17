import React, { InputHTMLAttributes, PropsWithChildren } from 'react'

import { Label } from '@/components/ui/label'
import Autocomplete, {
  AutocompleteSeverAction,
} from '@/components/custom/Form/GenericFormComponents/Autocomplete'
import RequiredLabelIndicator from '@/components/custom/Form/GenericFormComponents/RequiredLabelIndicator'
import { FormEngineLookupProps } from '@/components/custom/Form/FormEngine/FormEngine'

export type LookupProps = {
  // isComposed?: boolean; //if this component is composed in another component. we need this to determine to apply a bottom margin or not
  handleSelectionChange?: (value: string) => void
  uniqueSearchKey: string
  serverAction: AutocompleteSeverAction
  fastifyEndpointUrl: string
  imperativelyClearState?: boolean
} & FormEngineLookupProps &
  InputHTMLAttributes<HTMLInputElement> &
  PropsWithChildren

export function Lookup({
  id,
  label,
  description,
  required,
  onChange,
  children,
  // isComposed,
  serverAction,
  fastifyEndpointUrl,
  characterCountToBeginSearch,
  timeBetweenKeystrokes,
  numberOfResults,
  ...props
}: LookupProps) {
  //default functionality is just setting the value of the formengine component to the selected text. if the user passes in their own handleSelectionChange function that function will be called instead of this one.
  function handleSelectionChange(value: string) {
    onChange?.(value)
  }

  return (
    // <div className={`flex flex-col w-full gap-1.5 ${!isComposed ? "mb-4" : ""} last:mb-0`}>
    <div className={`flex flex-col w-full gap-1.5 mb-4 first:mb-0`}>
      <Label htmlFor={`autocomplete-${id}`}>
        {label}
        {required ? <RequiredLabelIndicator /> : null}
      </Label>
      <div className="flex w-full items-center space-x-2">
        <Autocomplete
          id={`autocomplete-${id}`}
          name={`autocomplete-${id}`}
          required={required} //have to pass this in explicitly since we destructed it to check if we need the required star or not on the label
          type={'text'}
          handleSelectionChange={handleSelectionChange} // <---note this will be overwritten by ...props if provided as props to this component, otherwise the one defined in this component will be used
          autoCompleteConfig={{
            serverAction,
            fastifyEndpointUrl,
            characterCountToBeginSearch,
            timeBetweenKeystrokes,
            numberOfResults,
          }}
          {...props}
        />
        {children}
      </div>
      {description?.length ? (
        <p className={'text-sm text-muted-foreground'}>{description}</p>
      ) : null}
    </div>
  )
}

//optional if we need to later: https://react.dev/reference/react/memo#specifying-a-custom-comparison-function
// export default memo(FundLookup);
