/* eslint-disable import/no-unresolved */
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChildrenInterface } from '@/interfaces/childElement.interface'

const TanstackReact = ({ children }: ChildrenInterface) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default TanstackReact
