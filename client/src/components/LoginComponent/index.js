import React from 'react';
import './style.css';

function LoginComponent(props) {
    return (
        <div className="container">
            <div className="row loginbox">
                <div className="col s8 offset-s2">
                    <div className="card">
                    <div className="card-image">
                    <img className="background" src="images/geometric-cave2.jpg" alt="background design" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <span className="card-title">Log In</span>
                            <form id="signin" name="signin" >
                                <label htmlFor="username">Username</label>
                                <input name="username" value={props.email} onChange={(e) => {
                                    props.setValue("email", e.target.value)
                                }} type="text" />
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" value={props.password} onChange={(e) => {
                                    props.setValue("password", e.target.value)
                                }}/>
                                <button className="btn" onClick={props.handleSubmit}>Sign In</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default LoginComponent;
