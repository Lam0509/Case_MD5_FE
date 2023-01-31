import Layout from "../../../components/user/Layout";
import store from "../../../store/store";
import {Provider, useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import FoodDetail from "../../../components/user/FoodDetail";
import RecentComments from "../../../components/user/RecentComments";
import {useRouter} from "next/router";
import axios from "axios";
import MyBackDrop from "../../../components/user/shares/BackDrop";
import {authActions} from "../../../features/auth/authSlice";

export default function UserHome() {
    const [child, setChild] = useState(<MyBackDrop/>)

    const dispatch = useDispatch();

    const router = useRouter();
    const { pid } = router.query;

    useEffect(() => {
        function fetchData() {
            axios.get(`http://localhost:8000/admin/product/detail/${pid}`)
                .then((res) => {
                    const logIn = localStorage.getItem('token') !== null ? true : false
                    if (logIn) {
                        dispatch(authActions.loggedIn())
                        setChild(<FoodDetail id={pid} myProduct={res.data.product} myCategories={res.data.categories}>
                            <RecentComments myAssessment={res.data.assessment}/>
                        </FoodDetail>)
                    } else {
                        setChild(<FoodDetail id={pid} myProduct={res.data.product} myCategories={res.data.categories}>
                            <RecentComments myAssessment={res.data.assessment}/>
                        </FoodDetail>)
                    }
                }).catch((error) => console.log(error)
            )
        }

        fetchData()
    }, [pid]);

    return (
        <Provider store={store}>
            <Layout>
                {child}
            </Layout>
        </Provider>
    )
}