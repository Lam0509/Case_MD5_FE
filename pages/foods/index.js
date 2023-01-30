import Layout from "../../components/user/Layout";
import store from "../../store/store";
import {Provider} from "react-redux";
import React from "react";
import AllFoods from "../../components/user/AllFoods";
import axios from "axios";


export async function getServerSideProps(){
    let result = await axios.get('http://localhost:8000/admin/product/search');
    return {
        props :{
            products: result.data
        }
    }

}
export default function UserHome(props) {
    return (
        <Provider store={store}>
            <Layout>
                <AllFoods data={props.products}/>
            </Layout>
        </Provider>
    )
}