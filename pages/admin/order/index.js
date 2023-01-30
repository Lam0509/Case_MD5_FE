import Layout from "../../../components/admin/Layout";
import axios from "axios";
import List from "../../../components/admin/order/List";

export async function getServerSideProps(context) {
    let result = await axios.get('http://localhost:8000/admin/order/status')
    return {
        props: {
            allStatus: result.data
        }
    }
}

export default function Index(props) {
    return (
        <Layout>
            <List allSta={props.allStatus}/>
        </Layout>
    )
}

