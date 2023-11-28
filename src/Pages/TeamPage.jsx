import React from 'react';
import PageTitle from '../Component/PageTitle/PageTitle';
import TeamMember from '../Component/TeamMember/TeamMember';

const TeamPage = () => {
    return (
        <div>
            <PageTitle title= "Team" />
            <TeamMember/>
        </div>
    );
};

export default TeamPage;