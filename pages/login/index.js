import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider} from "react-redux";
import React from "react";
import Login from "../../components/user/Login";

export default function UserHome() {
    return (
        <Provider store={store}>
            <Layout>
                <Login/>
            </Layout>
        </Provider>
    )
}