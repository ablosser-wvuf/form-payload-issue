'use client'

import { Button } from '@/components/ui/button'

import Image from 'next/image'
import { Loader2 } from 'lucide-react'
//import oneLoginLogo from '@/public/oneloginlogo.png'
import { useState, useTransition } from 'react'

import { getErrorMessage } from '@utilities/getErrorMessage'

type SignInOutProps = {
  buttonText: string
  serverAction: () => Promise<string | undefined | void>
}

/**
 * Used for both signing in and out.
 *
 * todo: on the signout page there seems to be a redirect error somewhere when clicking signout... i cant figure it out but it does seem to successfully sign the user out
 */
export default function SignInOut({ buttonText, serverAction }: SignInOutProps) {
  // const [error, action, isPending] = useActionState(actionFn, '');
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()

  //not sure what the width/height should be of the onelogin logo... todo: figure out the correct image dimensions
  return (
    <div className={'flex flex-col justify-center gap-3'}>
      <Button
        type="submit"
        className="w-full"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            try {
              await serverAction()
            } catch (error) {
              setError(true)
              setErrorMessage(getErrorMessage(error))
            }
          })
        }}
      >
        {isPending && <Loader2 className="animate-spin" />}
        {/* <Image
          src={oneLoginLogo}
          alt={'OneLogin Logo'}
          width={'64'}
          height={'64'}
          className="mr-2 h-4 w-4"
        /> */}
        {isPending ? 'Please wait...' : `${buttonText} with OneLogin`}
      </Button>
      {error && (
        <div className={'text-center'}>
          <p className={'text-red-600'}>{errorMessage}</p>
        </div>
      )}
    </div>
  )
}
