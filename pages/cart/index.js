import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider, useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import Cart from "../../components/user/Cart";
import MyBackDrop from "../../components/user/shares/BackDrop";
import {useRouter} from "next/router";
import {authActions} from "../../features/auth/authSlice";

export default function UserHome() {
    const dispatch = useDispatch();
    const [child, setChild] = useState(<MyBackDrop/>)
    const router = useRouter()

    useEffect(() => {
        const logIn = localStorage.getItem('token') !== null ? true : false
        if (logIn) {
            dispatch(authActions.loggedIn())
            setChild(<Cart/>)
        } else {
            router.push('/login')
        }
    }, [])

    return (
        <Provider store={store}>
            <Layout>
                {child}
            </Layout>
        </Provider>
    )
}