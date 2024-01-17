import { useState } from "react";
import { createContext } from "react";


export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [openSideLeftMenu, setOpenSideLeftMenu] = useState(false)
    const [openSideLeftMenuWm, setOpenSideLeftMenuWm] = useState(false)
    const [shoppingCart, setShoppingCart] = useState([])
    const [openShoppingCart, setOpenShoppingCart] = useState(false)
    return (
        <AppContext.Provider
            value={{
                openSideLeftMenu,
                setOpenSideLeftMenu,
                openSideLeftMenuWm,
                setOpenSideLeftMenuWm,
                shoppingCart,
                setShoppingCart,
                openShoppingCart,
                setOpenShoppingCart
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

