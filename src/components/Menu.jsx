import '../styles/Menu.scss'
export const Menu = () => {
    return (
        <div className="Menu">
            <div className='Menu-top'>
                <h2>Mujer</h2>
                <p>Ver todo</p>
            </div>
            <nav>
                <ul>
                    <li>Camisas <span></span></li>
                    <li>Camisetas <span></span></li>
                    <li>Pijamas<span></span></li>
                    <li>Ropa interior<span></span></li>
                    <li>Chaquetas y Buzos<span></span></li>
                    <li>Joggers, pantalones y<br/> shorts<span></span></li>
                    <li>Calzado<span></span></li>
                    <li>Accesorios<span></span></li>
                </ul>
            </nav>
        </div>
    )
}
