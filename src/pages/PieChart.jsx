import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

import Behaviour from '../data.json'

ChartJS.register(ArcElement,
    Tooltip,
    Legend);

function PieChart() {

    const behavioralAnalytics = Behaviour["Behavioral Analytics"];

    const goodCount = behavioralAnalytics.filter(value => value === 'good').length;
  const badCount = behavioralAnalytics.filter(value => value === 'bad').length;

    const data = {
        labels: ['Good','Bad'],
        datasets: [
            {
                label: '',
                data: [goodCount, badCount],
                backgroundColor: [
                    'Green',
                    'Red',
                ],
                borderColor: [
                    'Green',
                    'Red',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsiv: true,
       maintainAspectRatio: false,
    }
    return (
        <div className="App">
            
            <div>
                <Pie height={200} width={500} data={data} options={options} ></Pie>
            </div>
        </div>
    )
}

export default PieChart
