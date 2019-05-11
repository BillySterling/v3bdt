import React, { Component } from 'react';
import TopNav from './../../components/TopNav';
import StudentSideNav from './../../components/StudentSideNav';
import StudentMainContainer from './../../components/StudentMainContainer';
import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class Student extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUserInfo: {},
            behaviorInfo: {behaviors: {}},
            chooseComponent: '',
            chosenBxId: '',
            chosenStudent: '',
            chosenBx: '',
            chartData: {},
            ready: false,
            accessToken: ''
        };
    };
    
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        
        let email = this.props.user.userName;
        let accessToken = '';
        //Gathers access token depending upon how it is sent in (this varies depending upon initial load or refresh)
        if (!this.props.user.accessToken.jwtToken) {
            accessToken = this.props.user.accessToken;
        } else {
            accessToken = this.props.user.accessToken.jwtToken;
        };
        //Sets accessToken to state in order to make initial loadBehaviors call
        this.setState({accessToken: accessToken});
        
        //Gathers this user's data and makes call to load behaviors associated with this user
        API.associateStudent(email, accessToken)
            .then(res => {this.setState({currentUserInfo: res.data}); this.loadBehaviors()})
            .catch(err=> console.log(err));
    };

    // Loads all behaviors and sets them to this.state.behaviorInfo
    loadBehaviors = () => {
        console.log("The call to load behaviors was made");
        API.getStudentBehaviors(this.state.accessToken)
            .then(res => 
                {                    
                    this.setState({ behaviorInfo: {behaviors: res.data} });
                    M.AutoInit();
                })
            .catch(err => console.log(err));
    };

    handleSideNavClick = event => {
        event.preventDefault();
        this.setState({ chooseComponent: event.target.text });
    };

    handleChooseStudent = event => {
        event.preventDefault();
        //Pulls in data from the event target
        const studentName = event.target.getAttribute('data-student');
        const bxId = event.target.name;
        const bxDescription = event.target.text;
        //Sets event target data in state
        this.setState({ chosenStudent: studentName, chosenBxId: bxId, chosenBx: bxDescription });

        //Call for all the data associated with this behavior needed for chart
        API.getChartData(bxId, this.props.user.accessToken.jwtToken)
        .then(res => {
            const returnedData = res.data; //save returned data     
            let behaviorDates = []; //initialize an array to hold all dates
            let behaviorAverages = []; //initialize an array to hold all averages

            //Loop through each day's behavioral data
            for (let i=0; i < returnedData.length; i++) {
                //Gathers info needed to populate chart
                let bxDate = returnedData[i].behaviorDate;
                let bxCount = (returnedData[i].behaviorCount);
                let bxTotal = (returnedData[i].behaviorTotal);
                //Calculates percent met for the day
                let averagePercentage = ((bxTotal/bxCount)*100).toFixed(2);
                //Pushes date and percent met to arrays
                behaviorDates.push(bxDate);
                behaviorAverages.push(averagePercentage);
            };

            //Sets state for the charts
            this.setState({
                chartData: {
                    labels: behaviorDates,
                    datasets:[{
                        label: this.state.chosenBx,
                        backgroundColor: "#48344f",
                        data: behaviorAverages,
                        borderColor: '"#48344f"',
                        pointBackgroundColor: '#48344f"',
                        pointBorderColor: ("#48344f"),
                        lineTension: 0,
                        pointStyle: 'circle',
                        fill: false
                    }]
                }
            });
        })
        .catch(err => console.log(err));
    };

    hideChart = event => {
        event.preventDefault();
        this.setState({ chosenStudent: '', chosenBxId: '', chosenBx: '' });
    };

    render() {
        return(
            <div className='fixtop'>
                <div className='side-nav'>
                    <StudentSideNav
                        currentUserInfo={this.state.currentUserInfo}
                        handleSideNavClick={this.handleSideNavClick}
                    />
                </div>
                <div className='main-right'>
                    <div className="navbar-fixed">
                        <TopNav logout={this.props.onLogout} />
                    </div>
                    <StudentMainContainer
                        chosenStudent={this.state.chosenStudent}
                        chosenBx={this.state.chosenBx}
                        chosenBxId={this.state.chosenBxId}
                        chooseComponent={this.state.chooseComponent}
                        currentUserInfo={this.state.currentUserInfo}
                        behaviorInfo={this.state.behaviorInfo}
                        handleChooseStudent={this.handleChooseStudent}
                        hideChart={this.hideChart}
                        populateChart={this.populateChart}
                        chartData={this.state.chartData}
                        // ready={this.state.ready}
                    />
                </div>
            </div>
        );
    };
};

export default Student;
