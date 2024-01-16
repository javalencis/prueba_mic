import { useState } from 'react'
import { Header } from './components/Header'
import { SideLeftNav } from './components/SideLeftNav'
import { SideLeftNavWomen } from './components/SideLeftNavWomen'


function App() {

  return (
    <>
      <Header/>
      <SideLeftNav/>
      <SideLeftNavWomen/>
    </>
  )
}

export default App
