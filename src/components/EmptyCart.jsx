import ImgEmptyCart from '../assets/imgs/empty-cart.jpg'
import '../styles/EmptyCart.scss'
export const EmptyCart = () => {
  return (
    <div className="EmptyCart">
        <div>
            <img src={ImgEmptyCart} alt="" />
        </div>
        <p>Tu carrito está vacío</p>
    </div>
  )
}
