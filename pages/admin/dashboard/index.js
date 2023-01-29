import Layout from "../../../components/admin/Layout";
import Dashboard from "../../../components/admin/dashboard/Dashboard";
import axios from "axios";

export async function getServerSideProps(context) {
    let resultRevenue = await axios.get('http://localhost:8000/admin/reports/revenue/year')
    let resultOrder = await axios.get('http://localhost:8000/admin/reports/orders/year')
    let resultUser = await axios.get('http://localhost:8000/admin/reports/users/year')
    let resultChart = await axios.get('http://localhost:8000/admin/reports/chart', {
        params: {
            year: 2022
        }
    })
    let resultYears = await axios.get('http://localhost:8000/admin/reports/years')
    return {
        props: {
            revenue: resultRevenue.data,
            orders: resultOrder.data,
            users: resultUser.data,
            chart: resultChart.data,
            years: resultYears.data
        }
    }
}

export default function myDashboard(props) {
    return (
        <Layout>
            <Dashboard myRevenue={props.revenue} myOrders={props.orders} myUsers={props.users} myChart={props.chart} myYears={props.years}/>
        </Layout>
    )
}