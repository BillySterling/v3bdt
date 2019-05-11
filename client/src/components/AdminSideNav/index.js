import React from 'react';
import './style.css';

function AdminSideNav(props) {
    console.log(props);
    return(
        <div className='burger'>
            <ul id='slide-out' className='sidenav sidenav-fixed'>
                <li className='top'>Welcome, {props.currentUserInfo.firstName} {props.currentUserInfo.lastName}!</li>
                <ul>
                    <li><a href='!#' onClick={props.handleSideNavClick}>Create/Edit Users</a></li>
                    <li><a href='!#' onClick={props.handleSideNavClick}>Create Classes</a></li>
                    <li><a href='!#' onClick={props.handleSideNavClick}>Enter Behavior Goals</a></li>
                    <li><a href='!#' onClick={props.handleSideNavClick}>View Student Data</a></li>
                    <li className="white"><div className="divider"></div></li>
                    <li><a href='/logout'>Log Out</a></li>
                </ul>
            </ul>
            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
    );
};

export default AdminSideNav;
