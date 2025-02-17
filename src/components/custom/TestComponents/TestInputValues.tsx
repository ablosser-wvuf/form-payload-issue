'use client'

import { Checkbox } from '@/components/ui/checkbox'

export function CheckboxDemo() {
  //
  // function onChange(event: ) {
  //     console.log("onChange Value:", event.target.value);
  // }

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        value={'hi'}
        onCheckedChange={(event) => {
          console.log(event)
        }}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
