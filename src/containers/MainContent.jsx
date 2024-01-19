import { SideLeftNav } from '../components/SideLeftNav'
import { SideLeftNavWomen } from '../components/SideLeftNavWomen'
import { Product } from './Product'
import { ShoppingCart } from './ShoppingCart'
import { Notification } from '../components/Notification'
export const MainContent = () => {
    return (
        <>
            <Product />
            <ShoppingCart />
            <SideLeftNav />
            <SideLeftNavWomen />
            <Notification />
        </>
    )
}
