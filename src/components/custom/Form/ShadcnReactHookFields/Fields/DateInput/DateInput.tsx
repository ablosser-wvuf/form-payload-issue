import React, { useState } from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@utilities/ui'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
// import {Calendar} from "@/components/ui/calendar";
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Date as DateInputField } from '@/lib/types/shadcnReactHookFields'
import { Calendar } from '@/components/custom/Form/GenericFormComponents/BetterDatePicker'

type DateInputProps<T extends FieldValues = FieldValues, TContext = any> = {
  control: Control<T>
  dateInputField: DateInputField
}

//note this component stores dates as literal javascript date objects
export default function DateInput<T extends FieldValues>({
  control,
  dateInputField: { name, label, description },
}: DateInputProps<T>) {
  const [open, setOpen] = useState(false) //popover open or not

  function handleDateSelect() {
    setOpen(false)
  }

  return (
    <FormField
      control={control}
      name={name as FieldPath<T>}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[240px] pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  {field.value ? (
                    format(
                      typeof field.value === 'string' ? new Date(field.value) : field.value,
                      'PPP',
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(event) => {
                  field.onChange(event)
                  handleDateSelect()
                }}
                captionLayout="dropdown"
                // disabled={(date) =>
                //     date > new Date() || date < new Date("1900-01-01")
                // }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
