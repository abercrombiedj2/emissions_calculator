import {useState} from 'react';
import "../stylesheets/Forms.css"

const EmissionsForm = ({addUser}) => {

    const [userName, setUserName] = useState('');
    const [landTravel, setLandTravel] = useState(0);
    const [airTravel, setAirTravel] = useState(0);
    const [food, setFood] = useState(0);
    const [lifestyle, setLifestyle] = useState(0);
    const [electricity, setElectricity] = useState(0);
    const [gas, setGas] = useState(0);
    const [total, setTotal] = useState(0);

    const handleUserNameChange = event => setUserName(event.target.value);

    const handleLandTravelChange = event => setLandTravel(parseInt(event.target.value));

    const handleAirTravelChange = event => {
        const airTravelEmissions = parseInt(event.target.value) * 2;
        setAirTravel(airTravelEmissions);
    };

    const handleFoodChange = event => {
        const foodEmissions = parseInt(event.target.value);
        setFood(foodEmissions);
    };

    const handleLifestyleChange = event => {
        const lifestyleEmissions = parseInt(event.target.value);
        setLifestyle(lifestyleEmissions);
    };

    const handleElectricityChange = event => {
        const electricityEmissions = parseInt(event.target.value);
        setElectricity(electricityEmissions);
    };
    
    const handleGasChange = event => {
        const gasEmissions = parseInt(event.target.value);
        setGas(gasEmissions);
    };

    const handleSubmit = event => {
        event.preventDefault();
        let totalEmissions = 0
        totalEmissions = landTravel + airTravel + food + lifestyle + electricity + gas;
        setTotal(totalEmissions)
        addUser({
            userName: userName,
            landTravel: landTravel,
            airTravel: airTravel,
            food: food,
            lifestyle: lifestyle,
            electricity: electricity,
            gas: gas,
            total: totalEmissions
        });
        window.location.href='/userlist';
    };
    
    return (
            <form onSubmit={handleSubmit} className='form'>
                <h1 id='form-header'>E.mission Questionnaire</h1>
                <div className='form-input'>
                    <input
                    type='text'
                    className='input'
                    name='userName'
                    value={userName}
                    placeholder='Enter your name'
                    required
                    onChange={handleUserNameChange} />
                </div>
                <div className='form-input'>
                    <select
                    name='land-travel'
                    className='input'
                    onChange={handleLandTravelChange}>
                    <option value='' disabled selected>How do you normally travel?</option>
                    <option value='4'>Car</option>
                    <option value='3'>Motorbike</option>
                    <option value='1'>Train</option>
                    <option value='1'>Bus</option>
                    <option value='1'>Underground</option>
                    <option value='1'>Tram</option>
                    <option value='0'>Bicycle</option>
                    <option value='0'>Walk</option>
                    </select>
                </div>
                <div className='form-input'>
                    <input
                    type='number'
                    className='input'
                    name='air-travel'
                    placeholder='How many return flights this year?'
                    required
                    onChange={handleAirTravelChange} />
                </div>
                <div className='form-input'>
                    <input
                    type='number'
                    className='input'
                    name='food'
                    placeholder='How many meals per week with meat?'
                    required
                    onChange={handleFoodChange} />
                </div>
                <div className='form-input'>
                    <select
                    name='lifestyle'
                    className='input'
                    onChange={handleLifestyleChange}>
                    <option value='' disabled selected>Amount you spend on clothes & products</option>
                    <option value='1'>Less than £50 per month</option>
                    <option value='2'>Less than £100 per month</option>
                    <option value='3'>More than £100 per month</option>
                    </select>
                </div>
                <div className='form-input'>
                    <select
                    name='electricity'
                    className='input'
                    onChange={handleElectricityChange}>
                    <option value='' disabled selected>Is your electricity renewably sourced?</option>
                    <option value='0'>Yes</option>
                    <option value='1'>No</option>
                    </select>
                </div>
                <div className='form-input'>
                    <select
                    name='gas'
                    className='input'
                    onChange={handleGasChange}>
                    <option value='' disabled selected>Is your gas carbon neutral?</option>
                    <option value='0'>Yes</option>
                    <option value='1'>No</option>
                    </select>
                </div>
                <input
                type='submit'
                name='submit'
                id='save'
                value='Save' />
            </form>
    )
};

export default EmissionsForm;