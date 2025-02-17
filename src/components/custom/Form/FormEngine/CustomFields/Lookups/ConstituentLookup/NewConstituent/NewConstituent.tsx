import React, { useRef, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { UserPlus } from 'lucide-react'
import NewConstituentForm from '@forms/newConstituent/NewConstituentForm'
import ScrollingDialogContent from '@/components/custom/ScrollingDialogContent/ScrollingDialogContent'
//import {TNewConstituentZodFormSchema} from "@/formsAndSchemas/constituentLookup/newConstituent/newConstituentZodFormSchema";

// type NewConstituentProps = {
//     disabled: boolean;
//     newConstituentInformation: TNewConstituentZodFormSchema;
//     handleNewConstituentAdd: (newConstituentInformation: TNewConstituentZodFormSchema) => void;
// };

export default function NewConstituent({
  disabled,
  newConstituentInformation,
  handleNewConstituentAdd,
}: any) {
  const [open, setOpen] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmitButtonClick() {
    formRef.current?.requestSubmit()
  }

  function handleSaveButtonClick() {
    //we need this function because we only want to close the dialog on successful adding of new constituent (passes the zod validation in the submit handler)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" disabled={disabled}>
          <UserPlus />
          New
        </Button>
      </DialogTrigger>
      <ScrollingDialogContent>
        <DialogHeader>
          <DialogTitle>New Constituent</DialogTitle>
          <DialogDescription>Please enter in all relevant information.</DialogDescription>
        </DialogHeader>
        <NewConstituentForm
          formRef={formRef}
          newConstituentInformation={newConstituentInformation}
          handleNewConstituentAdd={handleNewConstituentAdd}
          handleSaveButtonClick={handleSaveButtonClick}
        />
        <DialogFooter>
          {/*<DialogClose asChild>*/}
          <Button
            type="button"
            onClick={() => {
              handleSubmitButtonClick()
            }}
          >
            Save
          </Button>
          {/*</DialogClose>*/}
        </DialogFooter>
      </ScrollingDialogContent>
    </Dialog>
  )
}
