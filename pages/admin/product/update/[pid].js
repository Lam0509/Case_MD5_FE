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
    const [data, setData] = useState({
        product: {},
        categories: [],
        assessment: [],
    });

    useEffect(() => {
        function fetchData() {
            axios.get(`http://localhost:8000/admin/product/detail/${pid}`).then(res => {
                setData(res.data);
            })
        }
        fetchData();
    }, [])

    if (data.categories.length !== 0 && props.categories.length !== 0) {
        return (
            <Layout>
                <Update categories={props.categories} product={data.product} proCates={data.categories} id={pid}/>
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