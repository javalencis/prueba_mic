import '../styles/SideLeftNav.scss'
export const SideLeftNav = () => {
    return (
        <div className="SideLeftNav">
            <div className='Sln-top'>
                <p>¡HOLA!</p>
                <button>
                    X
                </button>
            </div>
            <div className='Sln-menu'>
                <ul className='Sln-menu--top'>
                    <li>MUJER</li>
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
    )
}
