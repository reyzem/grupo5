import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

const Dona = ({confirmed,critical,deaths,recovered}) => {
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
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
        <div className="w-100 m-5">
            <h2 className="W-100 text-center p-2 bg-yellow-500 text-white">CORONAVIRUS EN HONDURAS</h2>
            <Doughnut
                className="w-2/5 h-2/5"
                data={data}
            />
	    </div>
    );


}
export default Dona;
