import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider, useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import ProfilePage from "../../components/user/Profile";
import ProfilePageUpdate from "../../components/user/ProfileUpdate";
import MyBackDrop from "../../components/user/shares/BackDrop";
import {authActions} from "../../features/auth/authSlice";
import {useRouter} from 'next/router'
import axios from "axios";

export default function UserHome() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [child, setChild] = useState(<MyBackDrop/>)
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
                    setChild(<ProfilePage>
                        <ProfilePageUpdate/>
                    </ProfilePage>)
                })
            }
            fetchData()
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