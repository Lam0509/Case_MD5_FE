import axios from "axios";
import Layout from "../../../components/admin/Layout";
import List from "../../../components/admin/product/List";

export async function getServerSideProps(context) {
    let cate = await axios.get('http://localhost:8000/admin/category')
    let allSta = await axios.get('http://localhost:8000/admin/product/status')
    return {
        props: {
            categories: cate.data,
            allStatus: allSta.data
        }
    }
}

export default function Index(props) {
    return (
        <Layout>
            <List sta={props.allStatus} caTes={props.categories}/>
        </Layout>
    )
}


