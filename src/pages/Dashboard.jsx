import React from 'react';
import data from '../data.json'
import PieChart from './PieChart';
import About from './Attandance';
import Comment from './Homework';
const Dashboard = () => {

    let name = data[' NAME '];



    return (
        <>
            <h1>
                {name}
            </h1>
            <div className='Parent'>
                <About />


                <div className="lower">
                    <div className="leftsection">
                        <Comment />
                    </div>

                    <div className="rightsection">
                        <h1 >Behavioral Analytics</h1>
                        <PieChart />
                    </div>

                </div>

            </div>

        </>
    );
};

export default Dashboard;