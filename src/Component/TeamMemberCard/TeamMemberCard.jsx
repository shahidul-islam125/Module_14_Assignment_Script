import React from 'react';
import './TeamMemberCard.css'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
const TeamMemberCard = ({data}) => {
    return (
        <div className='col-md-4'>
            <div className='team-member-card'>
                <img src={data['image']} alt='Not Found'/>
                <h3>{data['name']}</h3>
                <ul className='member-social-links'>
                    <li><a href={data["facebook"]}><FaFacebookF/></a></li>
                    <li><a href={data["twitter"]}><FaTwitter/></a></li>
                    <li><a href={data["linked"]}><FaInstagram/></a></li>
                    <li><a href={data["instagram"]}><FaLinkedinIn/></a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default TeamMemberCard;