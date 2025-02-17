import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Checkbox as CheckboxInput } from '@/components/ui/checkbox'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Checkbox as CheckboxInputField } from '@/lib/types/shadcnReactHookFields'

type CheckboxProps<T extends FieldValues = FieldValues, TContext = any> = {
  control: Control<T>
  checkboxInputField: CheckboxInputField
}

//i believe the value should be of type boolean
export default function Checkbox<T extends FieldValues>({
  control,
  checkboxInputField: { name, label, description },
}: CheckboxProps<T>) {
  return (
    <FormField
      control={control}
      name={name as FieldPath<T>}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <CheckboxInput checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
        </FormItem>
      )}
    />
  )
}
