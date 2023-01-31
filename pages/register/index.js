import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider, useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import Register from "../../components/user/Register";
import {useRouter} from "next/router";
import {authActions} from "../../features/auth/authSlice";
import MyBackDrop from "../../components/user/shares/BackDrop";

export default function UserHome() {

    const [child, setChild] = useState(<MyBackDrop/>)

    const router = useRouter()

    const dispatch = useDispatch();

    useEffect(() => {
        const logIn = localStorage.getItem('token') !== null ? true : false
        if (logIn) {
            dispatch(authActions.loggedIn())
            router.push('/home')
        } else {
            setChild(<Register/>)
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
