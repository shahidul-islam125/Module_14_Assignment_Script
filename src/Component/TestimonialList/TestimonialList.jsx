import React from 'react';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import SectionTitle from '../SectionTitle/SectionTitle';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { useState } from 'react';

const TestimonialList = () => {
    const [testimonialData, setTestimonialData] = useState(null)

    useEffect(() => {
        fetch('/dataBase/testimonialData.json')
        .then(res => res.json())
        .then(data => setTestimonialData(data))

    }, [])

    if(testimonialData === null){
        return <Loader/>
    }

    return (
        <div className='container'>
            <SectionTitle title="Testimonial List" des="Better Agency/SEO Solution At Your Fingertips"/>

            <div className='row gy-4'>
                {
                    testimonialData.map((testimonial, index) =><TestimonialCard key={index} testimonial = {testimonial} />)
                }
            </div>
            
        </div>
    );
};

export default TestimonialList;