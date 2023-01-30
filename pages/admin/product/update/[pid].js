import Layout from "../../../../components/admin/Layout";
import Update from "../../../../components/admin/product/Update";
import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import {Backdrop} from "@mui/material";

export async function getServerSideProps(context) {
    let result = await axios.get('http://localhost:8000/admin/category')
    return {
        props: {
            categories: result.data
        }
    }
}

export default function MyFormUpdate(props) {
    const router = useRouter()
    const { pid } = router.query
    const [product, setProduct] = useState({
        name: '',
        image: '',
        quantity: '',
        price: '',
        status: '',
        category: ''
    });

    useEffect(() => {
        function fetchData() {
            axios.get(`http://localhost:8000/admin/product/detail/${pid}`).then(res => {
                // setProductCategories(res.data.categories);
                setProduct(res.data.productSelected[0]);
            })
        }
        fetchData();
    }, [])

    if (product.id && props.categories.length !== 0) {
        return (
            <Layout>
                <Update categories={props.categories} product={product} id={pid}/>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Layout>
        )
    }
}