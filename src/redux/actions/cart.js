import { bindActionCreators } from "redux";


export const toggleCart = () => {
    return {
        type: "TOGGLE_CART" 
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


