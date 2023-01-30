import React, {useEffect} from "react";
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/user/cart-page.module.css'
import { cartActions } from "../../features/shopping-cart/cartSlice";
import Link from 'next/link';
import {loggedIn} from "../../features/auth/authSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state=> state.cart.totalAmount);

    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(loggedIn());
        }
    })
    return (
        <Helmet title="Cart">
            <CommonSection title="Your Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {!cartItems ? (
                                <h5 className="text-center">Your cart is empty</h5>
                            ) : (
                                <table className={`${styles.table} table-bordered`}>
                                    <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cartItems.map((item) => (
                                        <Tr item={item} key={item.id} />
                                    ))}
                                    </tbody>
                                </table>
                            )}
                            <div className="mt-4">
                                <h6>Subtotal: <span className={styles.cart__subtotal}>${totalAmount}</span></h6>
                                <p>Taxes and shipping will caculator at checkout</p>
                                <div className={styles.cart__page__btn}>
                                    <button className="addToCart__btn me-4">
                                        <Link href='/foods'>Continue Shopping</Link>
                                    </button>
                                    <button className="addToCart__btn">
                                        <Link href='/checkout'>Proceed to checkout</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};
const Tr = (props) => {
    const { id, image01, title, price, quantity } = props.item;
    const dispatch = useDispatch()
    const deleteItem = () =>{
        dispatch(cartActions.deleteItem(id))
    }
    return (
        <tr>
            <td className={`text-center ${styles.cart__img__box}`}>
                <img src={image01} alt="" />
            </td>
            <td className="text-center">{title}</td>
            <td className="text-center">${price}</td>
            <td className="text-center">{quantity}px</td>
            <td className={`text-center ${styles.cart__item__del}`} onClick={deleteItem}>
                <i className="ri-delete-bin-line"></i>
            </td>
        </tr>
    );
};

export default Cart;