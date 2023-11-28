import React from 'react';

const ProjectCard = ({projectData}) => {
    return (
        <div className='col-md-6'>
            <div className='project-card'>
                <img src={projectData['img']} alt='Not Found'/>
                <h4>{projectData['title']}</h4>
            </div>
            
        </div>
    );
};

export default ProjectCard;