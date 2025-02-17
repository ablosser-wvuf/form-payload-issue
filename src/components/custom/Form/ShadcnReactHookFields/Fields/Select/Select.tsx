import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as SelectInput,
} from '@/components/ui/select'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Select as SelectInputField } from '@/lib/types/shadcnReactHookFields'

type SelectProps<T extends FieldValues = FieldValues, TContext = any> = {
  control: Control<T>
  selectInputField: SelectInputField
}

export default function Select<T extends FieldValues>({
  control,
  selectInputField: { name, label, placeholder, description, options },
}: SelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name as FieldPath<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <SelectInput onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => {
                return (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </SelectInput>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
