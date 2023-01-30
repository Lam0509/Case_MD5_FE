import MyCard from "../shares/Card";
import MyChart from "../shares/Chart";
import BasicMenu from "../shares/ListYears";
import {useState} from "react";
import axios from "axios";

export default function Dashboard(props) {

    const [MyDataChart, setMyDataChart] = useState(props.myChart)

    const handleChange = (value) => {
        axios.get('http://localhost:8000/admin/reports/chart', {
            params: {
                year: value
            }
        }).then(res => {
            setMyDataChart(res.data)
        })
    }

    return (
        <>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-12 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                </div>

                <h2 className='mb-3'>Reports</h2>
                <div className='d-flex justify-content-around mb-3'>
                    <div>
                        <MyCard
                            image='https://firebasestorage.googleapis.com/v0/b/case-md5-46ad6.appspot.com/o/dashboard-upload%2Feconomic.png?alt=media&token=b0fb1835-94d2-43f6-b382-276fa15e2cfc'
                            for='REVENUE'
                            data={props.myRevenue}
                        />
                    </div>
                    <div>
                        <MyCard
                            image='https://firebasestorage.googleapis.com/v0/b/case-md5-46ad6.appspot.com/o/dashboard-upload%2Finvoice.png?alt=media&token=68165da0-1cba-4e94-a17d-140970793914'
                            for='ORDERS'
                            data={props.myOrders}
                        />
                    </div>
                    <div>
                        <MyCard
                            image='https://firebasestorage.googleapis.com/v0/b/case-md5-46ad6.appspot.com/o/dashboard-upload%2Fselfie.png?alt=media&token=56f37c2f-cb56-4e88-ac9a-e6768cd02551'
                            for='USERS'
                            data={props.myUsers}
                        />
                    </div>
                </div>

                <div className='d-flex align-items-center'>
                    <h2>Chart</h2>
                    <BasicMenu data={props.myYears} change={handleChange}/>
                </div>
                <div className='d-flex align-items-center justify-content-around' style={{marginTop: '60px'}}>
                    <div className='col-lg-5'>
                        <MyChart data={MyDataChart.revenues.map(item => {return +item.sum})} myChartType='bar' for='Revenue'/>
                    </div>
                    <div className='col-lg-5'>
                        <MyChart data={MyDataChart.orders.map(item => {return item.total})} myChartType='line' for='Order'/>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-around' style={{marginTop: '80px'}}>
                    <div className='col-lg-5'>
                        <MyChart data={MyDataChart.users.map(item => {return item.total})} myChartType='line' for='User'/>
                    </div>
                </div>

            </main>
        </>
    )
}

