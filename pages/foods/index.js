import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider, useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import AllFoods from "../../components/user/AllFoods";
import axios from "axios";
import MyBackDrop from "../../components/user/shares/BackDrop";
import {authActions} from "../../features/auth/authSlice";

export async function getServerSideProps(){
    let result = await axios.get('http://localhost:8000/admin/product/search');
    return {
        props :{
            products: result.data
        }
    }

}
export default function UserHome(props) {
    const [child, setChild] = useState(<MyBackDrop/>)

    const dispatch = useDispatch();

    useEffect(() => {
        const logIn = localStorage.getItem('token') !== null ? true : false
        if (logIn) {
            dispatch(authActions.loggedIn())
            setChild(<AllFoods data={props.products}/>)
        } else {
            setChild(<AllFoods data={props.products}/>)
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