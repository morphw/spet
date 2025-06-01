'use client'

import { usePathname } from 'next/navigation'

interface PageWrapperProps {
  children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <div className={`${!isHomePage ? 'pt-28 px-4 md:px-8' : ''}`}>
      {children}
    </div>
  )
}

export default PageWrapper 