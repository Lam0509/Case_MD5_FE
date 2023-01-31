import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider, useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import Login from "../../components/user/Login";
import MyBackDrop from "../../components/user/shares/BackDrop";
import {authActions} from "../../features/auth/authSlice";
import {useRouter} from "next/router";
import axios from "axios";

export default function UserHome() {

    const [child, setChild] = useState(<MyBackDrop/>)
    const router = useRouter()

    const dispatch = useDispatch();

    useEffect(() => {
        const logIn = localStorage.getItem('token') !== null ? true : false
        if (logIn) {
            async function fetchData() {
                let userToken = localStorage.getItem('token');
                await axios.get('http://localhost:8000/admin/user/detail', {
                    params: {
                        token: userToken
                    }
                }).then(res => {
                    dispatch(authActions.getUser(res.data[0]))
                    dispatch(authActions.loggedIn())
                    router.push('/home')
                })
            }
            fetchData()
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