import React from "react";

import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import Link from 'next/link'

import styles from '../../../../styles/user/shopping-cart.module.css'

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../../features/shopping-cart/CartUiSlice";

const Carts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartItems);

    const subtotalAmount = useSelector((state) => state.cart.totalAmount);

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };
    return (
        <div className={styles.cart__container}>
            <ListGroup className={styles.cart}>
                <div className={styles.cart__lose}>
          <span onClick={toggleCart}>
            <i className={`ri-close-fill ${styles.cart__lose__span__i}`}></i>
          </span>
                </div>

                <div className={styles.cart__item__list}>
                    {cartProducts.length === 0 ? (
                        <h6 className="text-center mt-5">No item added to the cart</h6>
                    ) : (
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    )}
                </div>
                <div className={`${styles.cart__button} cart__button d-flex align-items-center justify-content-between`}>
                    <h6 className={styles.cart__button__h6}>
                        Subtotal : <span className={styles.cart__button__h6__span}>${subtotalAmount}</span>
                    </h6>
                    <button className={styles.cart__button__button}>
                        <Link href="/checkout" style={{textDecoration: 'none', color: "black", fontWeight: 'bold'}}>Checkout</Link>
                    </button>
                </div>
            </ListGroup>
        </div>
    );
};

export default Carts;