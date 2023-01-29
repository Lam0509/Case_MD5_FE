import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider} from "react-redux";
import React from "react";
import AllFoods from "../../components/user/AllFoods";

export default function UserHome() {
    return (
        <Provider store={store}>
            <Layout>
                <AllFoods/>
            </Layout>
        </Provider>
    )
}