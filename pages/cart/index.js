import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider} from "react-redux";
import React from "react";
import Cart from "../../components/user/Cart";


export default function UserHome() {
    return (
        <Provider store={store}>
            <Layout>
                <Cart/>
            </Layout>
        </Provider>
    )
}