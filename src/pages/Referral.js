import React from 'react'
import MainContent from '../Content/Content'
import Header from '../My-Account/Header'

function Referral() {
  const header={
    title: 'Referral',
    showBackIcon:true
  }
  const maincontentprops={
    content:true
  }
  return (
    <div>
<Header {...header}/>
<MainContent {...maincontentprops}/>
    </div>
  )
}

export default Referral