import React from 'react';
import ChooseChart from './../ChooseChart';
import './style.css';

function StudentMainContainer(props) {

    switch(props.chooseComponent) {
        case 'View My Progress':
            return (<div className="fixmain">
                        <ChooseChart 
                            user={props.user}
                            behaviorInfo={props.behaviorInfo}
                            handleChooseStudent={props.handleChooseStudent}
                            chosenBxId={props.chosenBxId}
                            chosenStudent={props.chosenStudent}
                            chosenBx={props.chosenBx} 
                            hideChart={props.hideChart}
                            populateChart={props.populateChart}
                            chartData={props.chartData}
                            ready={props.ready}
                        />
                    </div>); 
        default:
            return (
                <div className="fixmain">
                    <div className="container">
                        <div className="row chartCard">
                            <div className="col s12 center-align">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">Welcome to the Behavioral Data Tracker!</span>
                                        <p>
                                            Choose "View My Progress" in the left navigation menu to view your progress monitoring charts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    };
};

export default StudentMainContainer;