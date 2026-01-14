import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props)
  return (
    <div className="pb-16 pt-6 h-[90vh] flex  items-center gap-10">
    
    <LeftContent />
    <RightContent  users= {props.users}/>

    </div>
  )
}

export default Page1Content
