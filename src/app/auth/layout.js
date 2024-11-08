import React from 'react'
import AuthLayout from '../Layouts/AuthLayout/layout'

export default function layout({children}) {
  return (
    <div>
      <AuthLayout>{children}</AuthLayout>
    </div>
  )
}
