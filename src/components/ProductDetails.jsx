import { useState } from 'react'
import '../styles/ProductDetails.scss'
import { InfoToggle } from './InfoToggle'
import { currencyFormat } from '../helpers/functions'
export const ProductDetails = ({ product, openModal }) => {
    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedAmount, setSelectedAmount] = useState(product.sizes[0].amount)
    const [isActive, setIsActive] = useState(false)
    const [amount, setAmount] = useState(1)

    const handleSelectedSize = (e) => {
        const index = parseInt(e.target.id)
        if (index === selectedSize) {

            setIsActive(v => !v)
        } else {
            setIsActive(true)
        }
        if (amount >= product.sizes[index].amount) {
            setAmount(product.sizes[index].amount)
        }

        setSelectedSize(index)
        setSelectedAmount(product.sizes[index].amount)
    }
    const handleOpenModal = () => {
        openModal(e => !e)
    }

    const handleChangeAmount = (e) => {
        let value = (e.target.value)

        if (/^\d*$/.test(value)) {
            value = (Number(value))
            if (value < 1) {
                setAmount('')
            } else if (value >= selectedAmount) {
                setAmount(selectedAmount)
            } else {
                setAmount(value)
            }
        } else {
            setAmount('')
        }
        // const value  = Number(e.target.value)

    }
    const handleBlurInput = () => {
        if (amount === '') {
            setAmount(1)
        }
    }

    const subAmount = () => {
        setAmount(c => c > 1 ? c - 1 : 1)
    }

    const addAmount = () => {
        setAmount(c => c < selectedAmount ? c + 1 : c)
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
                                <p>{currencyFormat(product.price)}</p>
                            </>
                            :
                            <p>{currencyFormat(product.price)}</p>

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
                                    className={isActive ? (selectedSize === index ? 'active' : '') : ''}
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
                <div className='pd-amount-add'>
                    <div className='amount'>
                        <button onClick={subAmount}> - </button>
                        <input
                            type="text"
                            value={amount}
                            onChange={handleChangeAmount}
                            onBlur={handleBlurInput}
                        />
                        <button onClick={addAmount}> + </button>
                    </div>
                    <button className='bt-addCart'>
                        AGREGAR A MI BOLSA
                    </button>
                </div>
                <div className='pd-toggle'>
                    <InfoToggle title={'Descripción de producto'}>
                        <p className='info'>{product.description}</p>
                    </InfoToggle>
                    <InfoToggle title={'Especificaciones'}>
                        <p className='info esp'>
                            <span>País de fabricación:</span>
                            {product.specifications?.country}
                            <span>Registro Sic:</span>
                            {product.specifications?.sic}
                            <span>Especificaciones:</span>
                            {product.specifications?.details}
                            <span>Color:</span>
                            {product.specifications?.colors}
                        </p>
                    </InfoToggle>
                    <InfoToggle title={'Composición'}>
                        <p className='info'>{product.composition}</p>
                    </InfoToggle>
                    <InfoToggle title={'Cuidados'}>
                        <p className='info'>{product.care}</p>
                    </InfoToggle>
                    <InfoToggle title={'Descubre más'}>
                        <p className='info'>{product.more}</p>
                    </InfoToggle>
                </div>
            </div>
        </section>
    )
}
