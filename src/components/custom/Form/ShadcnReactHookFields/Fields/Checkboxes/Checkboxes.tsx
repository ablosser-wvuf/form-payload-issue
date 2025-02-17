import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Checkbox as CheckboxInput } from '@/components/ui/checkbox'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Checkboxes as CheckboxesInputField } from '@/lib/types/shadcnReactHookFields'

type CheckboxesProps<T extends FieldValues = FieldValues, TContext = any> = {
  control: Control<T>
  checkboxesInputField: CheckboxesInputField
}

//i believe the values will be of type array of strings
export default function Checkboxes<T extends FieldValues>({
  control,
  checkboxesInputField: { name, label, description, options },
}: CheckboxesProps<T>) {
  return (
    <FormField
      control={control}
      name={name as FieldPath<T>}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          {options.map((item) => (
            <FormField
              key={item.value}
              control={control}
              name={name as FieldPath<T>}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <CheckboxInput
                        checked={field.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.value])
                            : field.onChange(
                                field.value?.filter((value: string) => value !== item.value),
                              )
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                )
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
