import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../../assets/user/images/res-logo.png";

import styles from '../../../styles/user/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className="footer__logo text-start">
                            <img src={logo.src} className={styles.footer__logo__img} alt="logo" />
                            <h5 className={styles.footer__logo__h5}>Tasty Treat</h5>
                            <p className={styles.footer__logo__p}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Incidunt adipisci ad atque
                            </p>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Delivery Time</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem className={`${styles.delivery__time__item} border-0 ps-0`}>
                                <span className={styles.delivery__time__item__span}>Sunday - Thursday</span>
                                <p className={styles.delivery__time__item__p}>10:00am - 11:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className={`${styles.delivery__time__item} border-0 ps-0`}>
                                <span className={styles.delivery__time__item__span}>Friday - Saturday</span>
                                <p className={styles.delivery__time__item__p}>Offday</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className={styles.footer__title}>Contact</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem style={{backgroundColor:'#FDE4E4'}} className="delivery__time-item border-0 ps-0">
                                <span>Location: Hà Nội</span>
                            </ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#FDE4E4'}} className="delivery__time-item border-0 ps-0">
                                <span>Phone: 0336796710</span>
                            </ListGroupItem>

                            <ListGroupItem style={{backgroundColor:'#FDE4E4'}} className="delivery__time-item border-0 ps-0">
                                <span>Email: treattasty@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className={styles.newsletter}>
                            <input className={styles.newsletter__input} type="email" placeholder="Enter your email" />
                            <span className={styles.newsletter__span}>
                <i className={`${styles.newsletter__span__i} ri-send-plane-line`}></i>
              </span>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="6" md="6">
                        <p className={styles.copyright__text}>Copyright - 2022, website made by Nu. All Rights Reserved.</p>
                    </Col>
                    <Col lg="6" md="6">
                        <div className={`${styles.social__links} d-flex align-items-center gap-4 justify-content-end`}>
                            <p className={`${styles.social__links__p} m-0`}>
                                Follow:
                            </p>
                            <span className={styles.social__links__span} >
                <a style={{textDecoration: 'none'}} className={styles.social__links__span__a} href="https://www.facebook.com/profile.php?id=100006647792868"><i className={`${styles.social__links__span__i} ri-facebook-line`}></i></a>
              </span>
                            <span className={styles.social__links__span}>
                                <a style={{textDecoration: 'none'}} className={styles.social__links__span__a} href="https://www.linkedin.com/in/hoangtuan99/"><i className={`${styles.social__links__span__i} ri-linkedin-line`}></i></a>
              </span>
                            <span className={styles.social__links__span}>
                                <a style={{textDecoration: 'none'}} className={styles.social__links__span__a} href="https://www.youtube.com/channel/UCwrTzvZP4EZ8Jg2MkhEQUTw"><i className={`${styles.social__links__span__i} ri-youtube-line`}></i></a>
              </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;