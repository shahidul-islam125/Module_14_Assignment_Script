import React from 'react';
import './CounterCard.css'
const CounterCard = ({data}) => {
    return (
        <div className='col-md-3'>
            <div className='counter-card'>
                <img src={data?.icon} alt='Activity'/>
                <h3>{data?.number}</h3>
                <p>{data?.title}</p>
            </div>

            
        </div>
    );
};

export default CounterCard;