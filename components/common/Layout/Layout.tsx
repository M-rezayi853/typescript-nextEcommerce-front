import { FC } from 'react'

import { Footer, Navbar } from '@components/common'
import { Sidebar } from '@components/ui'
import { CartSidebar } from '@components/Cart'
import { useUI } from '@components/ui/context'
import s from './Layout.module.css'

const Layout: FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI()

  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        <CartSidebar />
      </Sidebar>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
