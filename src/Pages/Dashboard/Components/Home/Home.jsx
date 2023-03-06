import React from 'react'

// MUI | ANT-D :
import { DatePicker } from 'antd'

// Components :
import Cards from './Components/ReportCards/Cards'
import LineChart from "./Components/SalesReportChart/SalesChart"
// import GrowChart from "./Components/Growthchart/Growthchart"
// CSS :
import './Home.scss'
import DonutChart from './Components/DonutChart/DonutChart'




let { RangePicker } = DatePicker;
const Home = () => {
    return (
        <div className='dashboardHomeContainer'>
            <div className="heading">DASHBOARD</div>
            <Cards />
            <div className="reportBox">
                <div className="chartsBox">
                    <div className="flexLineSpace">
                        <div className="subHeading">Sales Report</div>
                        <RangePicker />
                    </div>
                    <div className="charts">
                        <LineChart />
                    </div>
                </div>
                <div className="donutBox">
                    <div className="flexLineSpace">
                        <div className="subHeading">Products Report</div>
                        <RangePicker />
                    </div>
                    <div className="donuts">
                        <DonutChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home