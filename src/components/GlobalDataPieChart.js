import React from 'react';
import {Pie} from 'react-chartjs-2';

export default function GlobalDataPieChart(props) {
    const data = {
        labels: [
            'Death',
            'Confirmed',
            'Recovered'
        ],
        datasets: [{
            data: [props.death, props.confirm, props.recover],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    return (
        <div>
        <h2>Covid-19 Result in Pie Chart</h2>
        <Pie data={data} height={70}/>
      </div>
    )
}
