import { GiPineTree } from 'react-icons/gi';
import '../stylesheets/LandingPage.css';


const LandingPage = (getStarted) => {

const handleGetStarted = () => {
    getStarted();
}

return (
    <div className='landing-page'>
        <div className='tree-icon'>
        < GiPineTree size="200px" color="black"/>
        </div>
        <h1 className='landing-h1'>
        "Never before have we had such an awareness of what we are doing to the planet,
        and never before have we had the power to do something about that."
        </h1>
        <h2 className='landing-h2'>Sir David Attenborough</h2> 
        <div className='button-div'>
        <button className="landing-page-button"><a className="button-link" href="/emissionsform">Get Started</a></button>
        </div>
        <div className='counter-div'>
            <p>
        <iframe title='Tons of CO2 emitted into the atmosphere' src='https://www.theworldcounts.com/embed/challenges/23?background_color=rgb(48, 158, 136)&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20'></iframe>
        </p>
        </div>
        {/* <img src='../stylesheets/images/leaf.png' alt='Green leaf'></img> */}
    </div>

)


};
export default LandingPage;