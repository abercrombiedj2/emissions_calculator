import { GiPineTree } from 'react-icons/gi';
import '../stylesheets/LandingPage.css';


const LandingPage = () => {

return (
    <div className='landing-page'>
        <div className='landing-logo'>
        <h3 className='logo'><span id='e'>E.</span>mission</h3>
        </div>
        <blockquote className='landing-paragraph'>
        <p>"Never before have we had such an awareness of what we are doing to the planet,<br/>
        and never before have we had the power to do something about that."<br/>--Sir David Attenborough </p>
        </blockquote>
        <div className='container'>
        <h2 className='statement'>The way we go about our daily lives can drastically<br/>
        impact the environment we share. Use the E.mission<br/> calculator to discover
        your own carbon footprint.
        </h2>
        <div className='button-div'>
        <button className="landing-page-button"><a className="button-link" href="/emissionsform">Get Started</a></button>
        </div>
        </div>
        {/* <div className='counter-div'>
            <p>
        <iframe title='Tons of CO2 emitted into the atmosphere' src='https://www.theworldcounts.com/embed/challenges/23?background_color=rgb(48, 158, 136)&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20'></iframe>
        </p>
        </div> */}
        {/* <img src='../stylesheets/images/leaf.png' alt='Green leaf'></img> */}
    </div>

)


};
export default LandingPage;