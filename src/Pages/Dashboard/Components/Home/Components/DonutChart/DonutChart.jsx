import React from 'react'

// Chart.Js : 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

// CSS :
import "./DonutChart.scss"





// Registring Chart :
ChartJS.register(ArcElement, Tooltip, Legend);
////////////////////////////////////////////////////////////////////////
// Sample Chart Data :
const Sample = {
    labels: [],
    datasets: [
        {
            data: [40, 166],
            backgroundColor: ["#D72A5E", "#259E55"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1
        }
    ]
};
////////////////////////////////////////////////////////////////////////



const DonutChart = ({ title, data }) => {
    const onClick = (e) => {
        console.log(e);
    };
    return (
        <>
            <div className="donutchart_container">
                <div className='title'>
                    {title}
                </div>
                <div className='chart'>
                    <Doughnut data={data} onClick={(e) => onClick(e)} />
                </div>
                <div className='status_box'>
                    <div className='status'>
                        <div className='dot' style={{ backgroundColor: `${data.datasets[0]["backgroundColor"][0]}` }} > </div>
                        <div className='dot_title'>
                            Likes
                        </div>
                    </div>
                    <div className='status'>
                        <div className='dot' style={{ backgroundColor: `${data.datasets[0]["backgroundColor"][1]}` }}> </div>
                        <div className='dot_title'>
                            Comments
                        </div>
                    </div>
                    <div className='status'>
                        <div className='dot' style={{ backgroundColor: `${data.datasets[0]["backgroundColor"][2]}` }}> </div>
                        <div className='dot_title'>
                            Views
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonutChart