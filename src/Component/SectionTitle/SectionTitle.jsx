import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({title, des}) => {
    return (
        <div className='section-title'>
            <h5>{title}</h5>
            <h3>{des}</h3>
            
        </div>
    );
};

export default SectionTitle;