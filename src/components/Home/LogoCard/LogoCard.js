import React from 'react';
import './LogoCard.css';
const LogoCard = ({provider}) => {
    return (
        <div className='col-md-2 mr-4'>
            <img className='provider-img' src={provider.img} alt=""/>
        </div>
    );
};

export default LogoCard;