import React from 'react';
import BxChart from './../BxChart';
import './style.css';

function ChooseChart(props) {
    return(
        <>
            {(props.chosenBxId) ? (
                <BxChart 
                    chosenBxId={props.chosenBxId}
                    chosenStudent={props.chosenStudent}
                    bxDescription={props.bxDescription}
                    user={props.user}
                    hideChart={props.hideChart}
                    populateChart={props.populateChart}
                    chartData={props.chartData}
                />
            ) : (
            <div className="container">
                <div className="row chartCard">
                    <div className="col s12 center-align">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">To View Progress Charts:</span>
                                <p>
                                    Please choose a student's behavior in the chart below to view progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Choose a Behavior to View Progress</th>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <th>Behavior</th>
                                    </tr>
                                </thead>
                                {(props.behaviorInfo.behaviors) ? (
                                <tbody>
                                    {props.behaviorInfo.behaviors.map(behaviors => (
                                        <tr key={behaviors._id}>
                                            <td>{behaviors.studentName}</td>
                                            <td><a href='!#' name={behaviors._id} data-student={behaviors.studentName} onClick={props.handleChooseStudent}>{behaviors.behaviorName}</a></td>
                                        </tr>
                                    ))}
                                </tbody>
                                ) : 
                                (<tbody>
                                    <tr>
                                        <td>You do not have any assigned students yet.</td>
                                    </tr>
                                </tbody>)
                                }                     
                            </table>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseChart;