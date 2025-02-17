import React, { useState } from 'react'

import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import SearchConstituentForm from '@forms/searchConstituent/SearchConstituentForm'
import ScrollingDialogContent from '@/components/custom/ScrollingDialogContent/ScrollingDialogContent'

type SearchConstituentProps = {
  disabled: boolean
  handleAdvancedConstituentSearchSelection: (constituentId: string) => void
}

export default function SearchConstituent({
  disabled,
  handleAdvancedConstituentSearchSelection,
}: SearchConstituentProps) {
  const [open, setOpen] = useState(false)

  function handleConstituentSearchSelectionClose() {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" disabled={disabled}>
          <Search />
          Advanced Search
        </Button>
      </DialogTrigger>
      <ScrollingDialogContent>
        <DialogHeader>
          <DialogTitle>Advanced Search</DialogTitle>
          <DialogDescription>Enter in information to narrow down the search.</DialogDescription>
        </DialogHeader>
        <SearchConstituentForm
          handleAdvancedConstituentSearchSelection={handleAdvancedConstituentSearchSelection}
          handleConstituentSearchSelectionClose={handleConstituentSearchSelectionClose}
        />
        <DialogFooter></DialogFooter>
      </ScrollingDialogContent>
    </Dialog>
  )
}
