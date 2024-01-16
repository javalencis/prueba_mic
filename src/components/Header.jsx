import iconMenu from '../assets/icons/hamburguer.svg'
import { Elements } from './Elements'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Search } from './Search'
import '../styles/Header.scss'
export const Header = () => {
  return (
    <header className="Header">
        <div className='Hd-container'>
            <div className='Hd-MenuBurguer'>           
              <img src={iconMenu} alt="Icono menu lateral" />
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
