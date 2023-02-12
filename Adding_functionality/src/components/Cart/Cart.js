import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';



const Cart = (props) => {
  const cartCont = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCont.items.map((item) => (
        <li>Name: {item.name} Price: {item.price} Quantity: {item.quantity}</li>
      ))}
    </ul>
  );

  const totalAmount = (
    
    cartCont.items.reduce(( total, item)=>{
         let quant = item.quantity;
         let price = item.price;
         total = total + quant * price;
         return total;
    },0)
   
    );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
    
      <div className={classes.total}>
      
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
       
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
