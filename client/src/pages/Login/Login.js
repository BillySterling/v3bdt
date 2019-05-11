import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import LoginComponent from './../../components/LoginComponent';
import Footer from './../../components/Footer';
import API from '../../utils/API';
import './style.css';

class Login extends Component {
    // Set component's initial state
    state = {
        email: "",
        password: ""
    };

    setValue = (type, value) => {
        this.setState({[type]: value})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLogin(this.state.email, this.state.password)
            .then((data) => {
                API.associateUser(this.state.email, data.accessToken)
                .then(({data: userData}) => {
                    const tokens = {
                    refreshToken: {token: data.refreshToken},
                    idToken: {jwtToken: data.idToken},
                    accessToken: {jwtToken: data.accessToken}
                    };
                    const user = {
                    email: this.state.email,
                    ...userData, ...tokens
                    };
                    this.props.handleUser(user);
                    //Pushes user to the correct dashboard based upon authorization level
                    if (user.authLevel === 3) {
                        this.props.history.push("/teacher");
                    };
                    if (user.authLevel === 1) {
                        this.props.history.push("/student");
                    };
                    if (user.authLevel === 5) {
                        this.props.history.push("/admin");
                    };
                }); 
            });
    };

    render() {
        const passedProps = {
            handleSubmit: this.handleSubmit,
            setValue: this.setValue,
            email: this.state.email,
            password: this.state.password,
            ...this.props
        };
        console.log(this.props);

        return (
            <div className="main">
                <main>
                    <LoginComponent {...passedProps} />
                </main>
                <footer className="page-footer">
                    <Footer />
                </footer>
            </div>
        );
    };
};

export default withRouter(Login);
