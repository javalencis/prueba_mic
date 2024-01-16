import iconMenu from '../assets/icons/hamburguer.svg'
import { Elements } from './Elements'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Search } from './Search'
import '../styles/Header.scss'
import { useContext } from 'react'
import { AppContext } from '../context/AppCOntext'
export const Header = () => {
  const {setOpenSideLeftMenu} = useContext(AppContext);
  const handleOpenLeftMenu = () =>{
    setOpenSideLeftMenu(val => !val)
  }
  
  return (
    <header className="Header">
        <div className='Hd-container'>
            <div className='Hd-MenuBurguer'>           
              <img src={iconMenu} alt="Icono menu lateral" onClick={handleOpenLeftMenu}/>
              <Search view ={"tablet"}/>
            </div>
            <Logo/>
            <Navigation/>
            <Search view="desktop"/>
            <Elements/>
        </div>
    </header>
  )
}
