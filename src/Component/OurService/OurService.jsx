import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const OurService = () => {
    const [serviceData, setServiceData] = useState(null)

  useEffect(() => {
    fetch('/dataBase/serviceData.json')
    .then(res => res.json())
    .then(data => setServiceData(data))
  }, [])

    if(serviceData === null){
        return <Loader/>
    }
    return (
        <section className='container'>
            <SectionTitle title="Our All Services" des="We Provide BestWeb design services" />
            <div className='row gy-4'>
                {
                serviceData.map((service, index) => <ServiceCard key={index} service={service}/>)
                }
            </div>
            
        </section>
    );
};

export default OurService;