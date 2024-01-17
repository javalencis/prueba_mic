import { useState } from 'react'
import { Header } from './components/Header'
import { SideLeftNav } from './components/SideLeftNav'
import { SideLeftNavWomen } from './components/SideLeftNavWomen'
import { Product } from './components/Product'
import { ShoppingCart } from './components/ShoppingCart'


function App() {

  return (
    <>
      <Header/>
      <Product/>
      <ShoppingCart/>
      <SideLeftNav/>
      <SideLeftNavWomen/>
    </>
  )
}

export default App
