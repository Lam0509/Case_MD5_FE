import * as React from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);
import { useTheme } from '@mui/material';

export default function MyChart(props) {

    const theme = useTheme();

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                backgroundColor: '#3F51B5',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: props.data,
                borderColor: "#3e95cd",
                maxBarThickness: 10
            }
        ]
    }

    return (
        <div className="chart-container" style={{height: '400px'}}>
            <h3 style={{ textAlign: "center" }}>{props.for} report</h3>
            <Chart
                type={props.myChartType}
                data={chartData}
                options={
                    {
                        plugins: { legend: { display: false }},
                        animation: true,
                        cornerRadius: 20,
                        layout: { padding: 0 },
                        maintainAspectRatio: false,
                        responsive: true,
                        xAxes: [
                            {
                                ticks: {
                                    fontColor: theme.palette.text.secondary
                                },
                                gridLines: {
                                    display: false,
                                    drawBorder: false
                                }
                            }
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    fontColor: theme.palette.text.secondary,
                                    beginAtZero: true,
                                    min: 0
                                },
                                gridLines: {
                                    borderDash: [2],
                                    borderDashOffset: [2],
                                    color: theme.palette.divider,
                                    drawBorder: false,
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                    zeroLineColor: theme.palette.divider
                                }
                            }
                        ],
                        tooltips: {
                            backgroundColor: theme.palette.background.paper,
                            bodyFontColor: theme.palette.text.secondary,
                            borderColor: theme.palette.divider,
                            borderWidth: 1,
                            enabled: true,
                            footerFontColor: theme.palette.text.secondary,
                            intersect: false,
                            mode: 'index',
                            titleFontColor: theme.palette.text.primary
                        }
                    }
                }
            />
        </div>
    );
}