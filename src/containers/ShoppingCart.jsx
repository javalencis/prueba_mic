import { useContext } from 'react'
import '../styles/ShoppingCart.scss'
import { AppContext } from '../context/AppCOntext'
import { getSubtotalCart, getTotalCart } from '../helpers/functions';
import { EmptyCart } from '../components/EmptyCart';
import { CardProduct } from '../components/CardProduct';
export const ShoppingCart = () => {
    const { openShoppingCart, setOpenShoppingCart, shoppingCart } = useContext(AppContext);
    const handleOpenShoppingCart = () => {
        setOpenShoppingCart(v => !v)
    }
    return (
        <>
            <div className={openShoppingCart ? 'ShoppingCart expanded' : 'ShoppingCart collapsed'}>
                <div className="sc-top">
                    <p>MI BOLSA DE COMPRAS</p>
                    <button onClick={handleOpenShoppingCart}>
                        X
                    </button>
                </div>
                <div className="sc-content">
                    {
                        shoppingCart?.length > 0 ?
                            (
                                <div className="sc-list-item-cart">
                                    <div className="list">
                                        {shoppingCart.map((item, index) => (
                                            <CardProduct key={index} id={index} item={item} />
                                        ))}
                                    </div>
                                    <div className="details">
                                        <div className="details-top">

                                            <div>
                                                <p>SUBTOTAL</p>
                                                <p>{getSubtotalCart(shoppingCart)}</p>
                                            </div>
                                            <div>
                                                <p>COSTOS DE ENVÍO</p>
                                                <p>A calcular</p>
                                            </div>
                                            <div className="total">
                                                <p>TOTAL</p>
                                                <p>{getTotalCart(shoppingCart)}</p>
                                            </div>
                                        </div>
                                        <div className="details-center">
                                            <p>¡Tu envío es totalmente gratis!</p>
                                            <div className="bar"></div>
                                            <div className="prices">
                                                <p>$ 0</p>
                                                <p>$ 150.000</p>
                                            </div>
                                        </div>
                                        <div className="details-bottom">
                                            <button>
                                                FINALIZAR COMPRA
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            ) :
                            (
                                <EmptyCart />
                            )
                    }
                </div>

            </div>
            <div className={openShoppingCart ? 'Sc-bg expanded' : 'Sc-bg collapsed'}
                onClick={handleOpenShoppingCart}
            ></div>
        </>
    )
}
