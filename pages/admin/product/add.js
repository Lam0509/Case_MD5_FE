import Layout from "../../../components/admin/Layout";
import Add from "../../../components/admin/product/Add";
import axios from "axios";

export async function getServerSideProps(context) {
    let result = await axios.get('http://localhost:8000/admin/category')
    return {
        props: {
            categories: result.data
        }
    }
}

export default function myFormAdd(props) {
    return (
        <Layout>
            <Add categories={props.categories}/>
        </Layout>
    )
}