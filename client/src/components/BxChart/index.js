import React from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';

function BxChart(props){ 
    return(
        <div className="container">
            <div className="chart">
                <Line
                    data={props.chartData}
                    width={500}
                    height={300}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: 100
                                }
                            }]
                        },
                        title:{
                            display:true,
                            text: `${props.chosenStudent}`,
                            fontSize:25,
                            legend: {
                                labels: {
                                    fontColor: "#135764",
                                    fontSize: 18
                                }
                            }
                        }
                    }}
                />
            </div>
            <div>
                <button className="waves-effect waves-light btn-small" id="hideChart" onClick={props.hideChart}>Click to Hide Chart</button>
            </div>
        </div>
    );
};

export default BxChart;
