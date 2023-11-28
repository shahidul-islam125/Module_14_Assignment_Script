import React from 'react';
import './WorkListCard.css'
import {BsArrowRight} from 'react-icons/bs'

const WorkListCard = ({data}) => {
    return (
        <div className='col-md-4'>
            <div className='work-card'>
                <img src={data?.icon} alt='Activity'/>
                <h4>{data?.title}</h4>
                <p>{data?.des}</p>
                <button className='my-btn'>Learn more <BsArrowRight/></button>
            </div>
            
        </div>
    );
};

export default WorkListCard;

