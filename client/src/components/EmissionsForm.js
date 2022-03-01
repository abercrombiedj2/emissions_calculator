import {useState} from 'react';
import "../stylesheets/EmissionsForm.css"

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
    };
    
    return (
        <div className='form-container'>
        <div className='emissions-form'>
            <form onSubmit={handleSubmit}>
                <h1>New user</h1>
                <div className='form-input'>
                    <label htmlFor='name'>Name: </label>
                    <input
                    type='text'
                    id='userName'
                    name='userName'
                    value={userName}
                    required
                    onChange={handleUserNameChange} />
                </div>
                <div className='form-input'>
                    <label htmlFor='land-travel'>How do you normally travel?</label>
                    <select
                    name='land-travel'
                    id='land-travel'
                    onChange={handleLandTravelChange}>
                    <option value=''>Select a mode of transport</option>
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
                    <label htmlFor='air-travel'>How many return flights have you taken in the last twelve months?</label>
                    <input
                    type='number'
                    id='air-travel'
                    name='air-travel'
                    required
                    onChange={handleAirTravelChange} />
                </div>
                <div className='form-input'>
                    <label htmlFor='food'>How many meals per week do you eat containing meat?</label>
                    <input
                    type='number'
                    id='food'
                    name='food'
                    required
                    onChange={handleFoodChange} />
                </div>
                <div className='form-input'>
                    <label htmlFor='lifestyle'>How much do you spend on clothes, health and beauty products each month?</label>
                    <select
                    name='lifestyle'
                    id='lifestyle'
                    onChange={handleLifestyleChange}>
                    <option value='1'>Less than £50</option>
                    <option value='2'>Less than £100</option>
                    <option value='3'>More than £100</option>
                    </select>
                </div>
                <div className='form-input'>
                    <label htmlFor='electricity'>Is your electricity from renewable sources?</label>
                    <select
                    name='electricity'
                    id='electricity'
                    onChange={handleElectricityChange}>
                    <option value='0'>Yes</option>
                    <option value='1'>No</option>
                    </select>
                </div>
                <div className='form-input'>
                    <label htmlFor='gas'>Is your gas carbon neutral?</label>
                    <select
                    name='gas'
                    id='gas'
                    onChange={handleGasChange}>
                    <option value='0'>Yes</option>
                    <option value='1'>No</option>
                    </select>
                </div>
                <input
                type='submit'
                name='submit'
                value='Save' />
            </form>
        </div>
        </div>
    )
};

export default EmissionsForm;