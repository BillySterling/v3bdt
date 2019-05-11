import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Admin from './pages/Admin';
import Authenticator from './components/Auth';

const Routes = props => {
    return(
        props.isAuthenticated || props.user ? (
            <React.Fragment>
                <Route exact path="/teacher" render={() => <Teacher {...props} />} />
                <Route exact path="/student" component={Student} />
                <Route exact path="/admin" render={() => <Admin {...props} />} />
            </React.Fragment>
        ) : (<Route render={() => <Login {...props} />} />)
    )
}
class App extends Component {

    state = {
        user: null
    };

    componentWillMount() {
        window.localStorage.clear();
    }
    
    // componentDidUpdate(prevProps, prevState, snapshot) {}

    handleUser = (user) => {
        this.setState({ user });
    }

    render() {
        const passedProps = {
            user: this.state.user,
            handleUser: this.handleUser,
            ...this.props
        }

        return (
            <Router>
                <Switch>
                    <Authenticator handleUser= {this.handleUser} >
                       <Routes {...passedProps} />
                    </Authenticator>
                </Switch>
            </Router>
        );
    }
}

export default App;
