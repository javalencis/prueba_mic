import '../styles/Navigation.scss'
export const Navigation = () => {
    return (
        <nav className='Navigation'>
            <ul>
                <li><p>MUJER</p></li>
                <li><p>HOMBRE</p></li>
                <li><p>NUEVOS<br /><span>lanzamientos</span></p></li>
                <li className='offers'>
              
                        <img src="https://moviesshopco.vtexassets.com/assets/vtex.file-manager-graphql/images/ac92c6cb-cd0b-4710-91ea-3732fbf69ef1___af8bf1b7fb4ca691fb2fec6522190c4b.svg" alt="" />
       

                    <p>OFERTAS<br /><span>de temporada</span></p>
                </li>
            </ul>
        </nav>
    )
}
