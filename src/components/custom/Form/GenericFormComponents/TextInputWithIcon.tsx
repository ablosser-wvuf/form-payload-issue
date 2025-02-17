import * as React from 'react'

import { cn } from '@utilities/ui'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
}

/**
 * This is just copied from the shadcn input component. The only thing changed is a few css classes and a startIcon prop to allow icons inside of input fields.
 * See https://github.com/shadcn-ui/ui/discussions/1552#discussioncomment-8631468
 */
const TextInputWithIcon = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, ...props }, ref) => {
    return (
      <div className="w-full relative">
        {startIcon && (
          <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">{startIcon}</div>
        )}
        <input
          type={type}
          className={cn(
            'peer flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            startIcon ? 'pl-8' : '',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
TextInputWithIcon.displayName = 'Input'

export { TextInputWithIcon }
