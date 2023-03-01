import React from 'react'

// Components :
import Cards from './Components/ReportCards/Cards'

// CSS :
import './Home.scss'





const Home = () => {
    return (
        <div className='dashboardHomeContainer'>
            <div className="heading">DASHBOARD</div>
            <Cards />
            <div className="subHeading">Sales Report</div>
        </div>
    )
}

export default Home