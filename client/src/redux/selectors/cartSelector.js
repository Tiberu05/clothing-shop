import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.qty
        }, 0)
    
);

export const cartItemsTotalPrice = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((a, b) => {
            return a + (b.qty * b.price);
        }, 0)
);