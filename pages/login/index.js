import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider, useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import Login from "../../components/user/Login";
import MyBackDrop from "../../components/user/shares/BackDrop";
import {loggedIn} from "../../features/auth/authSlice";
import {useRouter} from "next/router";

export default function UserHome() {

    const [child, setChild] = useState(<MyBackDrop/>)
    const router = useRouter()

    const dispatch = useDispatch();

    useEffect(() => {
        const logIn = localStorage.getItem('token') !== null ? true : false
        if (logIn) {
            dispatch(loggedIn())
            router.push('/home')
        } else {
            setChild(<Login/>)
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