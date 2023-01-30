import React, {useState} from "react";
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import {Col, Container, Row} from "reactstrap";
import {useSelector} from "react-redux";
import styles from '../../styles/user/checkout.module.css'
import Button from "@mui/material/Button";
import Form from 'react-bootstrap/Form';

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
    return (<Helmet title="Checkout">
            <CommonSection title="Your Cart"/>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="6">
                            <h4 className="mt-4">Shipping Address</h4>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="phone" placeholder="Enter phone"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address"/>
                                </Form.Group>
                                <Button style={{margin: '20px'}} type="submit" variant="contained" color="error">
                                    Payment
                                </Button>
                            </Form>
                            {/*<form className="checkout__form" onSubmit={submitHandler}>*/}
                            {/*    <div className="form__group">*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            placeholder="Enter your name"*/}
                            {/*            onChange={(e) => setEnterName(e.target.value)}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <div className="form__group">*/}
                            {/*        <input*/}
                            {/*            type="email"*/}
                            {/*            placeholder="Enter your email"*/}
                            {/*            onChange={(e) => setEnterEmail(e.target.value)}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <div className="form__group">*/}
                            {/*        <input*/}
                            {/*            type="number"*/}
                            {/*            placeholder="Phone number"*/}
                            {/*            onChange={(e) => setEnterNumber(e.target.value)}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <div className="form__group">*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            placeholder="Country"*/}
                            {/*            onChange={(e) => setEnterCountry(e.target.value)}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <div className="form__group">*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            placeholder="City"*/}
                            {/*            onChange={(e) => setEnterCity(e.target.value)}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <div className="form__group">*/}
                            {/*        <input*/}
                            {/*            type="number"*/}
                            {/*            placeholder="Postal code"*/}
                            {/*            onChange={(e) => setPostalCode(e.target.value)}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <Button style={{margin:'20px'}} type="submit"  variant="contained" color="error">*/}
                            {/*        Payment*/}
                            {/*    </Button>*/}
                            {/*</form>*/}
                        </Col>
                        <Col style={{marginTop: '30px'}} lg="4" md="6">
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
        </Helmet>);
};
export default Checkout;