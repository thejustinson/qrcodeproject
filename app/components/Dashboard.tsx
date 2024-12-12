import React from 'react'
import DashboardTop from './DashboardTop'
import DashboardBody from './DashboardBody'

interface DashboardOptions{
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}

const Dashboard = ({isOpen, setIsOpen}: DashboardOptions) => {
  return (
    <div className='w-full h-screen overflow-y-hidden'>
        <DashboardTop isOpen={isOpen} setIsOpen={setIsOpen}/>
        <DashboardBody/>
    </div>
  )
}

export default Dashboard