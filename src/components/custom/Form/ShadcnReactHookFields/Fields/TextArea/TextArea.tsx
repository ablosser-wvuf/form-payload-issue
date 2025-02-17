import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Textarea as TextareaInputField } from '@/lib/types/shadcnReactHookFields'

type TextAreaProps<T extends FieldValues = FieldValues, TContext = any> = {
  control: Control<T>
  textareaInputField: TextareaInputField
}

export default function TextArea<T extends FieldValues>({
  control,
  textareaInputField: { name, label, placeholder, description },
}: TextAreaProps<T>) {
  return (
    <FormField
      control={control}
      name={name as FieldPath<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} className="resize-none" {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
