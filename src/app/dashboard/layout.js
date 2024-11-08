import React from 'react'
import MasterLayout from '../Layouts/MasterLayout/layout'

export default function dashLayout({children}) {
  return (
    <div>
      <MasterLayout>{children}</MasterLayout>
    </div>
  )
}
