import React, { Component } from 'react';
import './style.css';
import API from './../../utils/API';
const moment = require('moment');

class RatingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: true,
            newData: {},
        };
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        //Save the value to check if it is an empty string (or, for our purposes, null)- in which case we will not update the state
        let isItNull = event.target.value;
        if (isItNull === '') {
            const { name } = event.target;
            this.setState({
                newData: {
                    ...this.state.newData,
                    [name]: null
                }
            });
        } else {
            //Gets the name and value of the target that changed
            const { name, value } = event.target;
            //Sets the state of the selected (and not-null) object in the newData object, which also updates correctly if the same behavior row's value is changed again before the save data button is clicked
            this.setState({
                newData: {
                    ...this.state.newData,
                    [name]: value
                }
            });
        }
    };

    saveData = event => {
        event.preventDefault();
        const today = moment().format('MM/DD/YYYY'); //Gets the current date
        let dataArray= []; //
        //Loop through each behavior rating to update each behavior
        for (let i = 0; i < this.props.behaviorInfo.behaviors.length; i++) {
            //Get the behaviorID
            const bxId = this.props.behaviorInfo.behaviors[i]._id;
            //If the behavior was rated, proceed (if it was not or was rated N/A, this.state.newData[bxId] would return the falsy values 'undefined' or 'null')
            if (this.state.newData[bxId]) {
                const rating = this.state.newData[bxId]; //The rating associated with a given bxId
                let dataToSend = {}; //initializes object to store data to send to API
                if (rating === '0') {
                    dataToSend = {
                        behavior: bxId,
                        behaviorDate: today,
                        behaviorTracking: {behaviorValue: rating}, //Here to send later
                        behaviorCount: 1, 
                        behaviorTotal: 0 //Increment is set to 0 in this case
                    };
                    //Push this object to dataArray
                    dataArray.push(dataToSend);            
                } else if (rating === '1') {
                    dataToSend = {
                        behavior: bxId,
                        behaviorDate: today, 
                        behaviorTracking: {behaviorValue: rating}, //Here to send later
                        behaviorCount: 1, 
                        behaviorTotal: 1 //Increment is set to 1 in this case
                    };
                    //Push this object to dataArray
                    dataArray.push(dataToSend);
                } else {
                    console.log('Something went wrong with that logic!'); //This should never occur
                };

            } else {
                console.log('A behavior was not rated or had a value of null.');
            };
        };

        //Maps each object in dataArray to the API.saveData function and waits for all responses before setting state
        Promise.all(dataArray.map(obj => API.saveData(obj, this.props.user.accessToken.jwtToken)))
            //clears the newData object and sets mount to false in state (which conditionally renders message that data has saved and button to rate again)
            .then(res => this.setState({ newData: {}, mount: false }))
            .catch(err => console.log(err));
    };
    
    //Called upon 'rate again' button click- sets mount to true in state in order to conditionally render rating form
    remount = (event) => {
        event.preventDefault();
        this.setState({ mount: true });
    };

    render() {
        return (
            <>
            {(this.state.mount) ? (
            <main>      
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Behavior</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    {(this.props.behaviorInfo.behaviors) ? (
                                    <tbody>
                                        {this.props.behaviorInfo.behaviors.map(behaviors => (
                                        <tr key={behaviors._id}>
                                            <td>{behaviors.studentName}</td>
                                            <td>{behaviors.behaviorName}</td>
                                            <td>
                                                <form id={behaviors._id} name='rating' onChange={this.handleInputChange}>
                                                     <label>
                                                        <input id='Met'  value={1} name={behaviors._id} type="radio" />
                                                        <span className="bspace"  >Met</span>
                                                        
                                                    </label>    
                                                    <label>
                                                        <input id="Not-Met"  value={0} name={behaviors._id} type="radio" />
                                                        <span className="bspace">Not Met</span>
                                                    </label>
                                                    <label>
                                                        <input id="N/A" value={''} name={behaviors._id} type="radio" />
                                                        <span className="bspace">N/A</span>
                                                    </label>
                                                </form>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    ) : 
                                    (<tbody>
                                        <tr>
                                            <td>You do not have any student behaviors to rate.</td>
                                        </tr>
                                    </tbody>)
                                    }                     
                                </table>
                                <button className="waves-effect waves-light btn-small" id="saveData" onClick={this.saveData}>Save Data</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </main>) : (
            <div className="container">
                <div className="row chartCard">
                    <div className="col s12 center-align">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Ratings Saved!</span>
                                <button className="waves-effect waves-light btn-small" id="rateAgain" onClick={this.remount}>Click to Rate Again!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
        );
    };
};

export default RatingForm;
