import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { SideLeftNav } from './components/SideLeftNav'
import { SideLeftNavWomen } from './components/SideLeftNavWomen'
import { Product } from './components/Product'
import { ShoppingCart } from './components/ShoppingCart'
import { Notification } from './components/Notification'
import { AppContext } from './context/AppCOntext'


function App() {
  const { addedItem } = useContext(AppContext)

  return (
    <>
      <Header />
      <Product />
      <ShoppingCart />
      <SideLeftNav />
      <SideLeftNavWomen />
  
      <Notification />
      
    </>
  )
}

export default App
