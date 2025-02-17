// app/posts/page.jsx
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import Posts from '@/components/custom/TanStackQuery/exampleClient'

//https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr

export async function getPosts() {}

export async function getComments() {}

export default async function PostsPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  )
}
