export const addItemToCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
               return { ...cartItem, qty: cartItem.qty + 1, totalPrice: cartItem.price * (cartItem.qty + 1)}
            } else {
                return cartItem;
            }
        })
    } else {
        return [...cartItems, { ...item, qty: 1, totalPrice: item.price * 1}];
    }
}