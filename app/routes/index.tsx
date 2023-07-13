import * as React from 'react'
import { ClientOnly } from 'remix-utils'

const ReactFlow = React.lazy(() => import('~/components/ReactFlow.client'))
export default function Index() {
  return (
    <div className="w-screen h-screen">
      <React.Suspense>
        <ClientOnly>{() => <ReactFlow />}</ClientOnly>
      </React.Suspense>
    </div>
  )
}
