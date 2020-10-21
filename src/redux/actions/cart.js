import { bindActionCreators } from "redux";


export const toggleCart = () => {
    return {
        type: "TOGGLE_CART" 
    }
};

export const showCart = () => {
    return {
        type: "SHOW_CART" 
    }
};

export const hideCart = () => {
    return {
        type: "HIDE_CART" 
    }
};

export const addToCart = (item) => {

   return {
       type: "ADD_ITEM",
       payload: item
   }

};

export const deleteItemFromCart = item => {
    return {
        type: "REMOVE_ITEM",
        payload: item
    }
};

export const decreaseItem = item => {
    return {
        type: "DECREASE_ITEM",
        payload: item
    }
};

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
};

