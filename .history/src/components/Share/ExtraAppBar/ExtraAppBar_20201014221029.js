import React from 'react';
import { Link } from 'react-router-dom';
import agencyLogo from '../../../images/logos/logo.png'
import './ExtraAppBar.css'
const ExtraAppBar = () => {
    
    const style={
        position: 'absolute',
        width: '150px',
        height: '47px',
        left: '645px',
        top: '81px'
  }
    return (
        <div className="container">
            <Link to='/home'><img className='extraAppBar' src={agencyLogo} alt=""/></Link>
        </div>
    );
};

export default ExtraAppBar;