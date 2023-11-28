import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectList = () => {
    const [project, setProject] = useState(null)
    
    useEffect(() => {
        fetch('/dataBase/projectData.json')
        .then(res => res.json())
        .then(data => setProject(data))
    }, [])

    if(project === null){
        return <Loader/>
    }

    return (
        <div className='container'>
            <SectionTitle title="All Project" des="Better Agency/SEO Solution At Your Fingertips"/>

            <div className='row'>
                {
                    project.map((projectData, index) => <ProjectCard key={index} projectData = {projectData}/>)
                }
            </div>
            
        </div>
    );
};

export default ProjectList;