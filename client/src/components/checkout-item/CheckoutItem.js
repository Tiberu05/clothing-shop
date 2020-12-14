import React from 'react';

const CheckoutItem = props => {

    console.log('RENDER');

    const { item, addToCart, decreaseItem, deleteItemFromCart } = props;

    return (
        <div className='checkout-row'>
            <div className='checkout-item image'><img alt={item.imageUrl} src={`${item.imageUrl}`} /></div>
            <div className='checkout-item name'>{item.name}</div>
            <div className='checkout-item qty'> 
                <ion-icon onClick={() => decreaseItem(item)} name="chevron-back-outline"></ion-icon>
                    {item.qty}
                <ion-icon onClick={() => addToCart(item)} name="chevron-forward-outline"></ion-icon>
            </div>
            <div className='checkout-item price'>${item.price}</div>
            <div className='checkout-item remove-item' onClick={() => deleteItemFromCart(item)}><ion-icon className='remove-icon' name="close-circle-outline"></ion-icon>
            </div>
        </div>
    )
};

export default CheckoutItem;