import React, { useRef } from "react";
import { Container } from "reactstrap";
import logo from "../../../assets/user/images/res-logo.png";
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux";
import LoginIcon from '@mui/icons-material/Login';
import 'remixicon/fonts/remixicon.css'
import { cartUiActions } from "../../../features/shopping-cart/CartUiSlice";
import styles from "../../../styles/user/header.module.css";
import ProfileMenu from "../UI/Profile/profile-list";

const nav__links = [
    {
        display: "Home",
        path: "/home",
    },
    {
        display: "Foods",
        path: "/foods",
    },
    {
        display: "Cart",
        path: "/cart",
    },
];

const Header = () => {

    const auth = useSelector(state => state.auth)
    const menuRef = useRef(null);

    const headerRef = useRef(null);

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const reduxState = useSelector((state) => state);

    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };

    const toggleMenu = () => menuRef.current.classList.toggle(`${styles.show__menu}`);

    return (
        <header className={`${styles.header} ${styles.header__shrink}`} ref={headerRef}>
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className={styles.logo}>
                        <Link href='/home' style={{textDecoration: 'none'}}>
                            <img src={logo.src} className={styles.logo__img} alt="logo" />
                            <h5 className={styles.logo__h5}>Tasty Treat</h5>
                        </Link>
                    </div>

                    <div className={styles.navigation} ref={menuRef} onClick={toggleMenu}>
                        <div className={`d-flex align-items-center gap-5 ${styles.menu}`}>
                            {nav__links.map((item, index) => (
                                <Link
                                    style={{textDecoration: 'none'}}
                                    className={styles.menu__a}
                                    href={item.path}
                                    key={index}
                                >
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* nav  right icons */}
                    <div className="nav__right d-flex align-items-center gap-3">
                        {auth.isLoggedIn ? (<>
                        <span className={styles.cart__icon} onClick={toggleCart}>
              <i className={`ri-shopping-basket-line ${styles.cart__icon__i}`}></i>
              <span className={styles.cart__badge}>{totalQuantity}</span>
            </span></>) : ''}

                        {auth.isLoggedIn ? (<ProfileMenu/>) : ( <span className="user">
              <Link href="/login">
                <LoginIcon style={{color: "#df2020"}}/>
              </Link>
            </span>)}

                        <span className={styles.mobile__menu} onClick={toggleMenu}>
              <i className={`ri-menu-line ${styles.mobile__menu__i}`}></i>
            </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;