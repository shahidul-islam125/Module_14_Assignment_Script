import React from 'react';
import './TestimonialCard.css'
const TestimonialCard = ({testimonial}) => {
    const {name, img, designation, text} = testimonial
    return (
        <div className='col-md-4'>
            <div className='testimonial-card'>
                <img src={img} alt='Not Found'/>
                <p>{text}</p>
                <h4>{name}</h4>
                <h6>{designation}</h6>
            </div>
            
        </div>
    );
};

export default TestimonialCard;