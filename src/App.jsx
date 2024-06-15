import React from 'react'
import 'remixicon/fonts/remixicon.css'
import MainpageHader from './meinPageNav.jsx'
import MainPage from './meinPage.jsx'

function App() {

  setTimeout(() => {
    // alert('website under development')
  }, 5000);
  
  return (
    <>
      <MainpageHader />
      <MainPage />
    </>
  )
}

export default App