import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Text as TextInputField } from '@/lib/types/shadcnReactHookFields'

type TextInputProps<T extends FieldValues = FieldValues, TContext = any> = {
  control: Control<T>
  textInputField: TextInputField
}

export default function TextInput<T extends FieldValues>({
  control,
  textInputField: { name, label, placeholder, description },
}: TextInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name as FieldPath<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
