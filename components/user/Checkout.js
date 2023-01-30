import React, { useState } from "react";
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/user/checkout.module.css'

const Checkout = () => {
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 30;
    const totalAmount = cartTotalAmount + shippingCost;

    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");
    const [enterCountry, setEnterCountry] = useState("");
    const [enterCity, setEnterCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const shippingInfo = [];
    const submitHandler = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enterName,
            email: enterEmail,
            phone: enterNumber,
            country: enterCountry,
            city: enterCity,
            postalCode: postalCode,
        };
        shippingInfo.push(userShippingAddress);
        console.log(shippingInfo);
    };

    return (
        <Helmet title="Checkout">
            <CommonSection title="Your Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="6">
                            <h6 className="mt-4">Shipping Address</h6>
                            <form className="checkout__form" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={(e) => setEnterName(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        placeholder="Phone number"
                                        onChange={(e) => setEnterNumber(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        onChange={(e) => setEnterCountry(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        onChange={(e) => setEnterCity(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        placeholder="Postal code"
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="addToCart__btn">Payment</button>
                            </form>

                        </Col>
                        <Col lg="4" md="6">
                            <div className={styles.checkout__bill}>
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Subtotal: $<span>{cartTotalAmount}</span>
                                </h6>
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Shipping: $<span>{shippingCost}</span>
                                </h6>
                                <div className={styles.checkout__total}>
                                    <h5 className="d-flex align-items-center justify-content-between">
                                        Total: <span>${totalAmount}</span>
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;