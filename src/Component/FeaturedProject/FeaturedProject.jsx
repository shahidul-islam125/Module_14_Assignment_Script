import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import SectionTitle from '../SectionTitle/SectionTitle';
import FeaturedProjectCard from './FeaturedProjectCard';

const FeaturedProject = () => {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        fetch('/dataBase/FeaturedProjectData.json')
        .then(res => res.json())
        .then(data => setProjectData(data))
    }, [])

    if(projectData === null){
        return <Loader/>
    }

    //Distribute project
    const [firstProject, ...restProject] = projectData

    return (
        <div className='feature-section'>
            <div className='container'>
                <SectionTitle title="Featured Project" des="We provide the Perfect Solution to your business growth" />

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='first-card'>
                            <img src={firstProject['image']} alt='Not Found'/>
                            <p>{firstProject['date']}</p>
                            <h4>{firstProject['title']}</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='row'>
                        {
                                restProject.map( (data, index) => <FeaturedProjectCard key={index} data={data}/>)
                            }  
                       
                        </div>
                           
                             
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FeaturedProject;