import React from 'react';
import Marquee from 'react-fast-marquee';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 d-flex align-items-center'>
                        <div className='hero-text'>
                            <h1>Increase Your Customers Loyalty and Satisfaction</h1>
                            <p>We help businesses like yours earn more customers, standout from competitors, make more money</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <img className='hero-img' src='/img/HeroImg/image 1.png' alt='Not Found'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='partnerSection'>
                <div className='container'>
                    <div className='partner-logo'>
                        <Marquee autoFill="true" pauseOnHover="true" speed="20">
                            <img src='/img/HeroImg/logos_google.png' alt='Google'/>
                            <img src='/img/HeroImg/Trello-logo-blue 1.png' alt='Trello'/>
                            <img src='/img/HeroImg/logos_monday.png' alt='Monday'/>
                            <img src='/img/HeroImg/Slack.png' alt='Slack'/>
                            <img src='/img/HeroImg/Notion.png' alt='Notion'/>
                        </Marquee>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;