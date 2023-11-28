import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md'

const PageTitle = ({title}) => {
    return (
        <section className='page-title-section'>
            <div className='container'>
                <div className='page-title-content'>
                        <h3>{title}</h3>
                        <p>Home <MdKeyboardArrowRight/> <span className='active'>{title}</span> </p>
                </div>
            </div>
            
        </section>
    );
};

export default PageTitle;