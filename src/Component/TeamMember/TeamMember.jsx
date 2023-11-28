import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const TeamMember = () => {
    const [memberData, setMemberData] = useState(null)

    useEffect(() => {
            fetch('/dataBase/teamMemberData.json')
            .then(res => res.json())
            .then(data => setMemberData(data))
    }, [])

    if(memberData === null){
        return <Loader/>
    }
    return (
        <section className='container'>
            <SectionTitle title="Our Team Member" des="Check our awesome team members"/>
            <div className='row'>
                {
                    memberData.map((data, index) => <TeamMemberCard key={index} data= {data}/>)
                }
            </div>
            
        </section>
    );
};

export default TeamMember;