import MyCard from "../shares/Card";
import Grid from '@mui/material/Grid';

export default function Dashboard() {
    return (
        <>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                </div>

                <h2>Reports</h2>
                {/*<div className="my-4 w-100 d-flex row" id="reports">*/}
                {/*    <div className='col-md-4'><MyCard/></div>*/}
                {/*    <div className='col-md-4'><MyCard/></div>*/}
                {/*    <div className='col-md-4'><MyCard/></div>*/}
                {/*</div>*/}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <MyCard/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <MyCard/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <MyCard/>
                    </Grid>
                </Grid>

                <h2>Charts</h2>
                <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
            </main>
        </>
    )
}

