import Layout from "../../../components/user/Layout";
import store from "../../../store/store";
import {Provider} from "react-redux";
import React, {useEffect, useState} from "react";
import FoodDetail from "../../../components/user/FoodDetail";
import RecentComments from "../../../components/user/RecentComments";
import {useRouter} from "next/router";
import axios from "axios";

// export default function UserHome() {
//     return (
//         <Provider store={store}>
//             <Layout>
//                 <FoodDetail>
//                     <RecentComments/>
//                 </FoodDetail>
//             </Layout>
//         </Provider>
//     )
// }

export default function UserHome() {

    const router = useRouter();
    const { pid } = router.query;
    const [data, setData] = useState({
        product: '',
        categories: [],
        assessment: []

    })

    useEffect(() => {
        function fetchData() {
            axios.get(`http://localhost:8000/admin/product/detail/${pid}`)
        .then((res) => {
                setData(res.data)
            }).catch((error) => console.log(error)
            )
        }

        fetchData()
    }, [pid]);

    return data.product !== '' && data.categories.length !== 0 && data.assessment.length !== 0 ?  (
        <Provider store={store}>
            <Layout>
                <FoodDetail id={pid} myProduct={data.product} myCategories={data.categories}>
                    <RecentComments/>
                </FoodDetail>
            </Layout>
        </Provider>
    ) :  <p>Loading..</p>
}