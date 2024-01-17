import { useState } from 'react'
import { Header } from './components/Header'
import { SideLeftNav } from './components/SideLeftNav'
import { SideLeftNavWomen } from './components/SideLeftNavWomen'
import { Product } from './components/Product'


function App() {

  return (
    <>
      <Header/>
      <Product/>
      <SideLeftNav/>
      <SideLeftNavWomen/>
    </>
  )
}

export default App
