import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider} from "react-redux";
import React from "react";
import ProfilePage from "../../components/user/Profile";
import OrdersPage from "../../components/user/Orders";

export default function UserHome() {
    return (
        <Provider store={store}>
            <Layout>
                <ProfilePage>
                    <OrdersPage/>
                </ProfilePage>
            </Layout>
        </Provider>
    )
}