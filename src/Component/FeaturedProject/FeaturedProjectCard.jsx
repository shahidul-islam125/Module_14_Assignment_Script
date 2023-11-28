import React from 'react';
import './FeaturedProjectCard.css'
const FeaturedProjectCard = ({data}) => {
    return (
        <div className='col-md-6'>
            <div className='restCard'>
                <img src={data["image"]} alt='Not Found'/>
                <p>{data["date"]}</p>
                <h6>{data["title"]}</h6>
            </div>
            
        </div>
    );
};

export default FeaturedProjectCard;