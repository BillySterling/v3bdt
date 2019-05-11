import React, { Component } from 'react';
import './style.css';
import API from './../../utils/API';
import M from "materialize-css";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Initialize new user values
            newUserFirstName: '',
            newUserLastName: '',
            newUserPassword: '', //Don't save here if we don't absolutely have to - should go to Cognito - will not go to our DB
            newUserCheckPw: '',
            newUserEmail: '',
            newUserAuthLevel: 1
        };
    };

    componentDidMount() {
        M.AutoInit();
    }

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    createUser = event => {
        event.preventDefault();
        console.log(`You entered first name: ${this.state.newUserFirstName}, last name: ${this.state.newUserLastName} password: ${this.state.newUserPassword}, pw check: ${this.state.newUserCheckPw}, email: ${this.state.newUserEmail}, auth level: ${this.state.newUserAuthLevel}... now you need to validate all this data, send first name, last name, auth level, email to mongoDB, and also create as a teacher, student, or admin in respective collection based on auth level... and you need to send this user through 2 factor auth with Cognito somehow.`);
        
        //After everything is validated, send it to mongo

        const newUserObject = {
            userName: this.state.newUserEmail,
            authLevel: this.state.newUserAuthLevel
        };
        console.log('NEW USER OBJECT: ', newUserObject);
        const addToCollectionObject = {
            userName: this.state.newUserEmail,
            authLevel: this.state.newUserAuthLevel,
            firstName: this.state.newUserFirstName,
            lastName: this.state.newUserLastName
        };
        console.log('ADD TO COLLECTION OBJECT: ', addToCollectionObject)
        const accessToken = this.props.user.accessToken.jwtToken;
        console.log('ACCESS TOKEN: ', accessToken);
        //Send the data to the user collection
        API.addNewUser(newUserObject, accessToken)
            .then(res => console.log('New User sent to user collection. Data: ', res.data))
            .catch(err => console.log(err));

        //Send the data to the student, teacher, or admin collection based upon authLevel
        if (this.state.newUserAuthLevel === 5) {
            console.log('Send the data to the admin collection');
            API.addNewAdmin(addToCollectionObject, accessToken)
                .then(res => {
                    console.log('Admin added!');
                    this.setState({ newUserFirstName: '',
                        newUserLastName: '',
                        newUserPassword: '', //Don't save here if we don't absolutely have to - should go to Cognito - will not go to our DB
                        newUserCheckPw: '',
                        newUserEmail: '',
                        newUserAuthLevel: 1
                    });
                });
        } else if (this.state.newUserAuthLevel === 3) {
            console.log('Send the data to the teacher collection');
            API.addNewTeacher(addToCollectionObject, accessToken)
                .then(res => {
                    console.log('Teacher added!');
                    this.setState({ newUserFirstName: '',
                        newUserLastName: '',
                        newUserPassword: '', //Don't save here if we don't absolutely have to - should go to Cognito - will not go to our DB
                        newUserCheckPw: '',
                        newUserEmail: '',
                        newUserAuthLevel: 1
                    });
                });
        } else if (this.state.newUserAuthLevel === 1) {
            console.log('Send the data to the student collection');
            API.addNewStudent(addToCollectionObject, accessToken)
                .then(res => {
                    console.log('Student added!');
                    this.setState({ newUserFirstName: '',
                        newUserLastName: '',
                        newUserPassword: '', //Don't save here if we don't absolutely have to - should go to Cognito - will not go to our DB
                        newUserCheckPw: '',
                        newUserEmail: '',
                        newUserAuthLevel: 1
                    });
                });
        } else {
            console.log('Error: Auth level not defined at this time.');
        };
    };
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input onChange={this.handleInputChange} name="newUserFirstName" id="first_name" type="text" className="validate"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input onChange={this.handleInputChange} name="newUserLastName" id="last_name" type="text" className="validate"/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <select onChange={this.handleInputChange} name="newUserAuthLevel">
                                    <option value="" disabled>Choose your option</option>
                                    <option value="1" defaultValue>Student</option>
                                    <option value="3">Teacher</option>
                                    <option value="5">Administrator</option>
                                </select>
                                    <label>This user is a(n): </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input onChange={this.handleInputChange} name="newUserPassword" id="password" type="password" className="validate"/>
                                <label htmlFor="password">Choose a Password</label>
                            </div>
                            <div className="input-field col s6">
                                <input onChange={this.handleInputChange} name="newUserCheckPw" id="repassword" type="password" className="validate"/>
                                <label htmlFor="repassword">Re-enter Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input onChange={this.handleInputChange} name="newUserEmail" id="email" type="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    </form>
                    <button className="waves-effect waves-light btn-small" id="createUser" onClick={this.createUser}>Create User</button>
                </div>
            </div>
        );
    };
};

export default AddUser;
