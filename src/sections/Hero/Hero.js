import './Hero.css';

import {PrimaryButtons,SeconderyButtons} from '../../components/index'

const Hero = () => {
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h6 className="hero-subtitle">Welcome to Cyborg</h6>
            <h4 className="hero-title"><em>Browse</em> Our Populer  Games Here</h4>

            <PrimaryButtons> <a href="browser.html">Browse Now</a> </PrimaryButtons>

            {/* <div className="main-button">  
                <a href="browser.html">Browse Now</a>
            </div> */}
        </div>
    </div>
  )
}

export default Hero