import React, { PropsWithChildren } from 'react'
import { NextThemesProvider } from '@/lib/providers/NextThemes'
import ReactQueryProvider from '@/lib/providers/ReactQuery'
import { ThemeProviderProps } from 'next-themes'


export default function Providers({ children, ...props }: ThemeProviderProps & PropsWithChildren) {
  return (
    <NextThemesProvider {...props}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextThemesProvider>
  )
}
