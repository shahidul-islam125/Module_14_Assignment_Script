import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Loader from '../Loader/Loader';
import WorkListCard from './WorkListCard';
import { useState } from 'react';
import { useEffect } from 'react';
const WorkList = () => {
    const [workData, setWorkData] = useState(null)

    useEffect(() => {
        fetch('/dataBase/workList.json')
        .then(res => res.json())
        .then(data => setWorkData(data))
    }, [])

    return (
         <section className='container'>
            <SectionTitle title = "Work List" des="We provide the Perfect Solution to your business growth"/>

            <div className='row'>
                {
                    workData === null ? <Loader/> 
                    : workData.map((data, index) => <WorkListCard key={index} data={data}/>)
                }
            </div>
        </section>
       
    
        
       

    );
};

export default WorkList;