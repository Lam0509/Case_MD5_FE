import Layout from "../../../components/admin/Layout";
import Add from "../../../components/admin/product/Add";
import axios from "axios";

export async function getServerSideProps(context) {
    let result = await axios.get('http://localhost:8000/admin/category')
    console.log(result)
    return {
        props: {
            categories: result.data
        }
    }
}

export default function myDashboard(props) {
    return (
        <Layout>
            <Add categories={props.categories}/>
        </Layout>
    )
}