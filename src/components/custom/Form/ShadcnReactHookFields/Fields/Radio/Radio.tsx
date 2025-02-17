import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Radio as RadioInputField } from '@/lib/types/shadcnReactHookFields'

type RadioProps<T extends FieldValues = FieldValues, TContext = any> = {
  control: Control<T>
  radioInputField: RadioInputField
}

export default function Radio<T extends FieldValues>({
  control,
  radioInputField: { name, label, options },
}: RadioProps<T>) {
  return (
    <FormField
      control={control}
      name={name as FieldPath<T>}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {options.map((option) => {
                return (
                  <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={option.value} />
                    </FormControl>
                    <FormLabel className="font-normal">{option.label}</FormLabel>
                  </FormItem>
                )
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
