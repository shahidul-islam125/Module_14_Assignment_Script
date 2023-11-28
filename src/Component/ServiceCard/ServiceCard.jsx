import React from 'react';
import './ServiceCard.css'
const ServiceCard = ({service}) => {
    return (
        <div className='col-md-6'>
            <div className='service-card'>
                <h4>{service['title']}</h4>
                <p>{service['des']}</p>
                <img src={service['img']} alt='Not Found'/>
            </div>
            
        </div>
    );
};

export default ServiceCard;