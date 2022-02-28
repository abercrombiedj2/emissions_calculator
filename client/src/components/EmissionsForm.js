import {useState} from 'react';
import "../stylesheets/EmissionsForm.css"

const EmissionsForm = ({addUser}) => {

    const [userName, setUserName] = useState('');
    const [travel, setTravel] = useState(0);
    const [food, setFood] = useState(0);
    const [home, setHome] = useState(0);

    const handleUserNameChange = event => setUserName(event.target.value);
    const handleFoodChange = event => setFood(event.target.value);
    const handleHomeChange = event => setHome(event.target.value);
    const handleTravelChange = event => setTravel(parseInt(event.target.value));

    const handleSubmit = event => {
        event.preventDefault();
        addUser({
            userName: userName,
            travel: travel,
            food: food,
            home: home
        });
        setUserName('');
        setTravel(0);
        setFood(0);
        setHome(0);
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
                    <select
                    name='land-travel'
                    id='land-travel'
                    onChange={handleTravelChange}>
                    <option value=''>How do you normally travel?</option>
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
                    <label htmlFor='food'>Food:  </label>
                    <input
                    type='number'
                    id='food'
                    name='food'
                    value={food}
                    required
                    onChange={handleFoodChange} />
                </div>
                <div className='form-input'>
                    <label htmlFor='home'>Home: </label>
                    <input
                    type='number'
                    id='home'
                    name='home'
                    value={home}
                    required
                    onChange={handleHomeChange} />
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