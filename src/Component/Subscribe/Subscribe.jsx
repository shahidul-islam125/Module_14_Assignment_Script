import './Subscribe.css';

const Subscribe = () => {
    return (
        <section className="subscribe-container">
            <div className="subscribe-title">
                <h5>SUBSCRIBE</h5>
                <h3>Subscribe To Tet The Latest <br /> News About Us</h3>
                <p>Please drop your email below to get daily update about what we do</p>
            </div>
            <div className='subscribe-form'>
                <input type="email" placeholder='Enter Your Email Address' />
                <button>Subscribe</button>
            </div>
            
        </section>
    );
};

export default Subscribe;