import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider} from "react-redux";
import React from "react";
import Checkout from "../../components/user/Checkout";

export default function UserHome() {
    return (
        <Provider store={store}>
            <Layout>
                <Checkout/>
            </Layout>
        </Provider>
    )
}