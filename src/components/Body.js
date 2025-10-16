import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Body() {
  return (
    <div className='flex w-full pt-20'>
      <div className=''>
     <Sidebar/>
     </div> 
   <Outlet/>
    </div>
  )
}
 
