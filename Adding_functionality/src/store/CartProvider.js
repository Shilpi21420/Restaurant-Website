import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) =>{
    const [items, updateItems ] = useState([]);
    const [ids, updateIdd] = useState([]);
    const addItemToCartHandler = (item) =>{
       updateItems([...items, item]);
    };

    const removeItemFromCartHandler = (id) =>{
        updateIdd([...ids,id]);

    };

const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
};

    return (
       <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;



// import React, { useReducer } from "react";
// import CartContext from "./cart-context";

// const defaultCartState = {
//     items: [],
//     totalAmount: 0
// };

// const cartReducer = (state, action) =>{
//     if(action.type==='ADD'){
//         const updatedItems = state.items.concat(action.item);
//         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//         return {
//             items: updatedItems,
//             totalAmount: updatedTotalAmount
//         };
//     }
//     return defaultCartState;
// };

// const CartProvider = (props) =>{
//     const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
//     const addItemToCartHandler = (item) =>{
//         dispatchCartAction({type: 'ADD',item: item});
//     };
//     const removeItemFromCartHandler = (id) =>{
//         dispatchCartAction({type: 'REMOVE', id: id});
//     };

// const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler
// };

//     return (
//        <CartContext.Provider value={cartContext}>
//         {props.children}
//         </CartContext.Provider>
//     );
// };

// export default CartProvider;