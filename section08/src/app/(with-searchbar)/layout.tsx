import Searchbar from '@/components/searchbar'
import { Suspense } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <div>{ new Date().toLocaleString() }</div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  )
}