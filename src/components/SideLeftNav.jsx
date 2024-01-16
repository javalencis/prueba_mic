import { useContext } from 'react'
import '../styles/SideLeftNav.scss'
import { AppContext } from '../context/AppCOntext'
export const SideLeftNav = () => {
    const { openSideLeftMenu, setOpenSideLeftMenu, setOpenSideLeftMenuWm} = useContext(AppContext);
    const handleOpenLefMenu = () => {
        setOpenSideLeftMenu(val => !val)
    }
    const handleOpenLeftMenuWm = () =>{
        setOpenSideLeftMenuWm(val=>!val)
    }
    return (
        <>
            <div className={openSideLeftMenu ? "SideLeftNav expanded" : "SideLeftNav collapsed"}>
                <div className='Sln-top'>
                    <p>¡HOLA!</p>
                    <button onClick={handleOpenLefMenu}>
                        X
                    </button>
                </div>
                <div className='Sln-menu'>
                    <ul className='Sln-menu--top'>
                        <li onClick={handleOpenLeftMenuWm}>MUJER</li>
                        <li>HOMBRE</li>
                    </ul>
                    <ul className='Sln-menu--center'>
                        <li>NUEVOS LANZAMIENTOS</li>
                        <li>ROPA DEPORTIVA 💪</li>
                        <li>OFERTAS 🔥</li>
                    </ul>
                    <ul className='Sln-menu--bottom'>
                        <li>MI CUENTA</li>
                        <li>MIS FAVORITOS</li>
                        <li>TIENDAS</li>
                        <li>TE AYUDAMOS</li>
                    </ul>
                </div>
            </div>
            <div className={openSideLeftMenu ? 'Sln-bg expanded' : 'Sln-bg collapsed'}
            onClick={handleOpenLefMenu}
            ></div>
        </>
    )
}
