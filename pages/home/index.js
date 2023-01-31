import Layout from "../../components/user/Layout";
import Home from "../../components/user/Home";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import MyBackDrop from "../../components/user/shares/BackDrop";
import {authActions} from "../../features/auth/authSlice";

export default function UserHome() {
    const [child, setChild] = useState(<MyBackDrop/>)


    const dispatch = useDispatch();

    useEffect(() => {
        const logIn = localStorage.getItem('token') !== null ? true : false
        if (logIn) {
            dispatch(authActions.loggedIn())
            setChild(<Home/>)
        } else {
            setChild(<Home/>)
        }
    }, [])
    return (
        <Layout>
            {child}
        </Layout>
    )
}