import React from 'react'
import Header from '../My-Account/Header'
function Logout() {
  const headerprops={
    title:"Logout",
    showBackIcon:true
  }
  return (
    <div>
      <Header {...headerprops}/>
     
    </div>
  )
}

export default Logout