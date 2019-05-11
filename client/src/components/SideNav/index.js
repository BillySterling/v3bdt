import React from 'react';
import './style.css';

function SideNav(props) {
    return(
        <div className='burger'>
            <ul id='slide-out' className='sidenav sidenav-fixed'>
                <li className='top'>Welcome, {props.behaviorInfo.firstName} {props.behaviorInfo.lastName}!</li>
                <ul>
                    <li><a href='!#' onClick={props.handleSideNavClick}>Rate Your Students</a></li>
                    <li><a href='!#' onClick={props.handleSideNavClick}>View Progress</a></li>
                    <li className="white"><div className="divider"></div></li>
                    <li><a href='/logout'>Log Out</a></li>
                </ul>
            </ul>
            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
    );
};

export default SideNav;
