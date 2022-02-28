

const LandingPage = (getStarted) => {

const handleGetStarted = () => {
    getStarted();
}

return (
    <div className='landing-page'>
        <h2>
        Never before have we had such an awareness of what we are doing to the planet,
        and never before have we had the power to do something about that.
        </h2>
        <iframe title='Tons of CO2 emitted into the atmosphere' src='https://www.theworldcounts.com/embed/challenges/23?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14'></iframe>
        <button><a href="/emissionsform">Get Started</a></button>
        {/* <img src='../stylesheets/images/leaf.png' alt='Green leaf'></img> */}
    </div>

)


};
export default LandingPage;