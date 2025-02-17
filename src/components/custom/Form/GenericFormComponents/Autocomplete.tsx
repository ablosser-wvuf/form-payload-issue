import React, { InputHTMLAttributes, useEffect, useState } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Check, Search } from 'lucide-react'
import { cn } from '@utilities/ui'
import { TextInputWithIcon } from '@/components/custom/Form/GenericFormComponents/TextInputWithIcon'
import { useDebounceValue } from 'usehooks-ts'
import { useQuery } from '@tanstack/react-query'

export type AutocompleteSearchOptions = { id: string; label: string }

const initialSelectedValue: AutocompleteSearchOptions = { id: '', label: '' }

export type AutocompleteSeverAction = (
  searchText: string,
  numberOfResults: number,
  url: string,
) => Promise<AutocompleteSearchOptions[]>

export type AutocompleteConfiguration = {
  serverAction: AutocompleteSeverAction
  fastifyEndpointUrl: string
  characterCountToBeginSearch: number
  timeBetweenKeystrokes: number
  numberOfResults: number
}

export type AutoCompleteProps = {
  uniqueSearchKey: string //the unique key for react query autocomplete
  imperativelyClearState?: boolean
  handleSelectionChange: (value: string) => void
  autoCompleteConfig: AutocompleteConfiguration
} & InputHTMLAttributes<HTMLInputElement>

/**
 *
 * Shadcn doesn't have an autocomplete component yet (as of 6/17/24 anyways)
 *
 * Stole/inspiration from: https://github.com/shadcn-ui/ui/issues/173#issuecomment-2054069397 and made a few tweaks
 *
 *
 * I spent way too much time on this component, making sure all the stupid state cases and http requests are handled correctly...
 *
 */
export default function Autocomplete({
  uniqueSearchKey, //the unique key for react query autocomplete
  autoCompleteConfig: {
    serverAction,
    fastifyEndpointUrl,
    numberOfResults,
    characterCountToBeginSearch,
    timeBetweenKeystrokes,
  },
  imperativelyClearState, //allows us to clear state from outside the component (useful for the constituent lookup when user switches between looking up the component by auto complete/searching and adding a new one
  handleSelectionChange, //setting state of whatever. this component has its own internal state
  onBlur, //ok for some unknown reason to me onBlur is being passed down to this component from formEngine and overwriting the onBlur function that this component needs to work correctly. pulling it out here so our onBlur gets used
  ...props
}: AutoCompleteProps) {
  const [open, setOpen] = useState(false) //popover

  const [inputValue, setInputValue] = useState('') //state of the auto complete text input field
  const [selectedValue, setSelectedValue] =
    useState<AutocompleteSearchOptions>(initialSelectedValue)
  const [searchOptions, setSearchOptions] = useState<AutocompleteSearchOptions[]>([]) //we are storing the options that get returned from the query in its own state. this allows us to keep it around after the query is invalid, etc.
  const [debouncedEnabled, setDebouncedEnabled] = useState(false) //we are using this to disable the query depending on certain circumstances to prevent extra fetches from the autocomplete
  const [extraFetch, setExtraFetch] = useState(true) //adding another state check... kept running into issues with the component sending extra http requests.....

  const [debouncedInputValue, setDebouncedInputValue] = useDebounceValue(
    inputValue,
    timeBetweenKeystrokes,
  ) //we are using a debounced input so the user isnt hammering the backend on every keystroke

  const { isLoading, error, isError, data } = useQuery({
    queryKey: [uniqueSearchKey, debouncedInputValue.toLowerCase()],
    queryFn: async () => {
      return await serverAction(debouncedInputValue, numberOfResults, fastifyEndpointUrl)
    },
    refetchOnWindowFocus: false,
    enabled:
      debouncedInputValue.length > characterCountToBeginSearch && debouncedEnabled && extraFetch, //this is sort of weird, but only way i found to stop extra http calls after interacting with component, clicking, typing, debounced typing... etc.
    // staleTime: 2000 * 60, //2 mins
    staleTime: Infinity,
  })

  useEffect(() => {
    if (isLoading) {
      setSearchOptions([])
    }
  }, [isLoading])

  useEffect(() => {
    if (data !== undefined) {
      setSearchOptions(data)
    }
  }, [data])

  useEffect(() => {
    if (debouncedInputValue.length > 0) {
      setDebouncedEnabled(true)
    }
  }, [debouncedInputValue])

  useEffect(() => {
    setInputValue('')
    setSelectedValue(initialSelectedValue)
    setSearchOptions([])
  }, [imperativelyClearState])

  let searchStateInformation = (
    <div className={'p-6 text-sm text-center'}>
      {`The search will begin after entering in more than ${characterCountToBeginSearch} characters.`}
    </div>
  )

  if (isError) {
    searchStateInformation = (
      <div className={'p-6 text-sm text-center'}>
        There was a problem with the search. Please try again.
      </div>
    )
  }

  if (isLoading) {
    searchStateInformation = <div className={'p-6 text-sm text-center'}>Searching...</div>
  }

  if (data !== undefined && data.length === 0) {
    searchStateInformation = <div className={'p-6 text-sm text-center'}>No Results Found.</div>
  }

  if (searchOptions.length > 0) {
    searchStateInformation = <></>
  }

  return (
    <div className="flex items-center w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <TextInputWithIcon
            value={inputValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(event.target.value)
              setExtraFetch(true)
              setDebouncedEnabled(false)
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement, Element>) => {
              if (selectedValue.id.length > 0 && event.target.value !== selectedValue.label) {
                //reset the input if user clicked off input
                setInputValue(selectedValue.label)
                setExtraFetch(false)
                setSearchOptions([selectedValue])
              }

              if (!selectedValue) {
                //reset the input if there is no selected value if user clicked off input
                setInputValue('')
                setSearchOptions([])
              }
            }} //end on blur
            onKeyDown={(e) => setOpen(e.key !== 'Escape')}
            type="text"
            startIcon={<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />}
            {...props}
          />
        </PopoverTrigger>

        <PopoverContent
          onOpenAutoFocus={(e) => {
            e.preventDefault()
          }}
          className="w-[--radix-popover-trigger-width] p-0"
        >
          {' '}
          {/* w-[--radix-popover-trigger-width]  is important so the options match the width of the input */}
          <Command>
            <CommandList>
              {searchStateInformation} {/* loading/error/no results, etc. */}
              <CommandGroup>
                {searchOptions.map((option) => (
                  <CommandItem
                    key={option.id}
                    value={option.id}
                    onMouseDown={(e) => e.preventDefault()}
                    onSelect={(selectedSelectValue) => {
                      // console.log(selectedSelectValue)
                      if (selectedSelectValue === selectedValue.id) {
                        //user selected already selected value so we deselect it
                        setInputValue('')
                        handleSelectionChange('')
                        setSearchOptions([])
                        setSelectedValue(initialSelectedValue)
                        setExtraFetch(false)
                      } else {
                        //base case
                        setInputValue(option.label)
                        setSelectedValue(option)
                        handleSelectionChange(selectedSelectValue)
                        setSearchOptions([option])
                        setExtraFetch(false)
                      }

                      setOpen(false)
                    }}
                  >
                    <Check
                      strokeWidth={3}
                      className={cn(
                        'mr-2 h-6 w-6 text-green-600',
                        selectedValue.label === option.label ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
