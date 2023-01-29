import React from "react";

import Header from "./shares/Header";
import Footer from "./shares/Footer";

import Carts from "./UI/Cart/Carts";
import { useSelector } from "react-redux";

const Layout = ({children}) => {
    const showCart = useSelector((state) => state.cartUi.cartIsVisiable);
    return (
        <div>
            <Header />

            {showCart && <Carts />}

            {children}
            <Footer />
        </div>
    );
};

export default Layout;