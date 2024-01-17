import { useState } from 'react'
import '../styles/ProductDetails.scss'
export const ProductDetails = ({ product,openModal }) => {
    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedAmount, setSelectedAmount] = useState(product.sizes[0].amount)
    const [isActive, setIsActive] = useState(false)
    const handleSelectedSize = (e) =>{
        const index = parseInt(e.target.id)
        if(index === selectedSize){

            setIsActive(v=>!v)
        }else{
            setIsActive(true)
        }
        setSelectedSize(index)
        setSelectedAmount(product.sizes[index].amount)
    }
    const handleOpenModal = () =>{
        openModal(e=>!e)
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
                                    className={isActive ? (selectedSize === index ? 'active':'' ):''}
                                >
                                    {value.size}
                                </li>
                            ))
                        }
                    </ul>

                    <button className='guide' onClick={handleOpenModal}>
                        Guía de tallas
                    </button>
                </div>
            </div>
        </section>
    )
}
