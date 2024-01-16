import '../styles/Search.scss'
export const Search = ({view}) => {
    return (
        <div className={'Search-'+view}>
            <p>Encuentra tu preferido</p>
            <div>
                <img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.160/search___09b655665e53917126ff14335ac8a0cb.svg" alt="" />
            </div>
        </div>
    )
}
