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
};

export const removeItemFromCart = (cartItems, item) => {

    return cartItems.filter(cartItem => cartItem.id !== item.id);

};

export const decreaseItemFromCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);


    if (existingCartItem) {
        if (existingCartItem.qty !== 1) {
            return cartItems.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem , qty: cartItem.qty - 1}
                } else {
                    return cartItem;
                }
            })
        } else {
            return cartItems.filter(cartItem => cartItem.id !== item.id)
        }
    }
    
    
}