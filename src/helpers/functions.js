export const currencyFormat = (number) =>{
    const newNumber = number.toLocaleString('es-CO',{ style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
    const formattedNumber = newNumber.replace(/\s/g, '');
    return formattedNumber
}

export const getSubtotalCart = (cart) => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        const price = cart[i].product.price
        const amount = cart[i].amount
        sum = sum + price * amount
    }

    return currencyFormat(sum)
}
export const getTotalCart = (cart) => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        const priceWD = priceWithDiscount(cart[i].product.price,cart[i].product.discountRate) 
        const amount = cart[i].amount
        sum = sum + priceWD * amount
    }

    return currencyFormat(sum)
}
export const addItemCart = (cart, newItem) => {
    let newCart = []
    const { itemAux, index } = findItem(newItem, cart)
    if (index >= 0) {
        cart[index] = itemAux
        newCart = [...cart]

    } else {
        newCart = [...cart, itemAux]
    }
    return newCart

}
export const findItem = (item, cart) => {
    let itemAux = item
    let index = -1
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (item.reference === cart[i].reference) {
                itemAux.amount = item.amount + cart[i].amount
                index = i
                break;
            }
        }
    } else {
        itemAux = item
    }


    return { itemAux, index }
}