import React from 'react';
import './style.css';

function Footer(props) {

    return (
    <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col s8 m4">
                    <h5>Learn</h5>
                    <ul>
                        <li><a href="https://github.com/kinneers/v3bdt" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a href="docs.html" target="_blank" rel="noopener noreferrer">Docs</a></li>
                    </ul>
                </div>
                <div className="col s8 m4">
                    <h5>About</h5>
                    <ul>
                        <li><a href="terms.html" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
                        <li><a href="privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="col s8 m4">
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto: support@behavioraldatakeeper.com">Support</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;