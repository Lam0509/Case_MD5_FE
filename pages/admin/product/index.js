import Layout from "../../../components/admin/Layout";
import List from "../../../components/admin/product/List";
import axios from "axios";

export async function getStaticProps(context) {
    let result = await axios.get('http://localhost:8000/admin/product')
    console.log(result)
    return {
        props: {
            products: result.data
        }
    }
}

export default function Index(props) {
    return (
        <>
            <Layout>
                <List products={props.products}/>
            </Layout>
        </>
    )
}

