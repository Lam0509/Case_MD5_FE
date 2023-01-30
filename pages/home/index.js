import Layout from "../../components/user/Layout";
import Home from "../../components/user/Home";
import store from "../../store/store";
import {Provider} from "react-redux";
import React from "react";

export default function UserHome() {
    return (
        <Layout>
            <Home/>
        </Layout>
    )
}