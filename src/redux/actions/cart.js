import store from '../store';


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
