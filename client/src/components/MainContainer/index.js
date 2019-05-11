import React from 'react';
import RatingForm from './../RatingForm';
import ChooseChart from './../ChooseChart';
import './style.css';

function MainContainer(props) {

    switch(props.chooseComponent) {
        case 'Rate Your Students':
            return (<div className="fixmain">
                        <RatingForm 
                            user={props.user}
                            behaviorInfo={props.behaviorInfo}
                        />
                    </div>);
        case 'View Progress':
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
                                            Choose "Rate Your Students" in the left navigation menu to rate your students' behaviors.
                                        </p>
                                        <p>
                                            Choose "View Progress" in the left navigation menu to view your students' progress monitoring charts.
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

export default MainContainer;