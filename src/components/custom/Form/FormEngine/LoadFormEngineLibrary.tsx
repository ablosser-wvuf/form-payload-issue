'use client'

import dynamic from 'next/dynamic'

//https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#skipping-ssr
//https://formengine.io/documentation/usage-with-nextjs
const LoadFormEngineLibrary = dynamic(
  async () => {
    return await import('@/components/custom/Form/FormEngine/FormEngine')
  },
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
)

export default LoadFormEngineLibrary
