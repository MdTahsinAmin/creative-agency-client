import React from 'react';
import agencyLogo from '../../../images/logos/logo.png';
import './NavigationBar.css';
const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">

        <a className="navbar-brand" href="#"><img className="agencyLogo" src={agencyLogo} alt=""/></a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item active">
                <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link mr-5" href="#">Our Portfolio</a>
            </li>

            <li className="nav-item">
                <a className="nav-link mr-5" href="#">Our Team</a>
            </li>
             <li className="nav-item">
                <button className='login-btn mr-5'>Login</button>
            </li>

            </ul>
            
        </div>
     </nav>
    );
};

export default NavigationBar;