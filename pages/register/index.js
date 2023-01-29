import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider} from "react-redux";
import React from "react";
import Register from "../../components/user/Register";

export default function UserHome() {
    return (
        <Provider store={store}>
            <Layout>
                <Register/>
            </Layout>
        </Provider>
    )
}