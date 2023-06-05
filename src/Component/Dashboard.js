import React from 'react'
import Base from '../Base/Base'

function Dashboard({title}) {
  return (
    <Base
    title={'Welcome to CRUD operator'}
    description={'lets see the student data'}
    children={'We have the few students data in this portal. We can Read, Delete, Update and Create the data'}
    >
    </Base>
  )
}

export default Dashboard