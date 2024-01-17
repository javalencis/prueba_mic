import { useState } from 'react'
import '../styles/ProductDetails.scss'
export const ProductDetails = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedAmount, setSelectedAmount] = useState(product.sizes[0].amount)
    const handleSelectedSize = (e) =>{

        setSelectedSize(parseInt(e.target.id))
        setSelectedAmount(product.sizes[parseInt(e.target.id)].amount)
    }
    return (
        <section className="ProductDetails">
            <div className='pd-container'>

                <h1>
                    {product.title}
                </h1>
                <div className='pd-subtitle-ref'>
                    <p className='subtitle'>{product.subtitle}</p>
                    <p className='ref'>Ref. {product.id}-{product.sizes[selectedSize].size}</p>
                </div>
                <div className='pd-price'>
                    {
                        product.discountRate
                            ?
                            <>
                                <p>{product.discountRate}</p>
                                <p>{product.price}</p>
                            </>
                            :
                            <p>{product.price}</p>
                    }
                </div>

                <p className='pd-stock'>¡Solo <span>{selectedAmount}</span> unidades disponibles!</p>

                <div className='pd-sizes-guide'>
                    <ul className='sizes'>

                        {
                            product.sizes.map((value, index) => (
                                <li
                                    key={index}
                                    id={index}
                                    onClick={handleSelectedSize}
                                    className={selectedSize === index ? 'active':''}
                                >
                                    {value.size}
                                </li>
                            ))
                        }
                    </ul>

                    <button className='guide'>
                        Guía de tallas
                    </button>
                </div>
            </div>
        </section>
    )
}
