import { GiPineTree } from 'react-icons/gi';
import '../stylesheets/LandingPage.css';


const LandingPage = () => {

return (
    <div className='landing-page'>
        <h2 className='statement'>The way we go about our daily lives can drastically<br/>
        impact the environment we share. Use the E.mission<br/> calculator to discover
        your own carbon footprint,<br/> compare it with others and get advice on how it can<br/> be reduced
        to combat global emissions.
        </h2>
        <blockquote className='landing-paragraph'>
        <p>"Never before have we had such an awareness of what we are doing to the planet,<br/>
        and never before have we had the power to do something about that."</p>
        </blockquote>
        <figcaption className='sird'> --Sir David Attenborough </figcaption> 
        <div className='button-div'>
        <button className="landing-page-button"><a className="button-link" href="/emissionsform">Get Started</a></button>
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