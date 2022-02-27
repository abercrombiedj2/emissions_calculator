import {useState} from 'react';
import "../styles/StyleForm.css"

const EmissionsForm = ({addUser}) => {

    const [userName, setUserName] = useState('');
    const [travel, setTravel] = useState(0);
    const [food, setFood] = useState(0);
    const [home, setHome] = useState(0);

    const handleUserNameChange = event => setUserName(event.target.value);
    const handleTravelChange = event => setTravel(event.target.value);
    const handleFoodChange = event => setFood(event.target.value);
    const handleHomeChange = event => setHome(event.target.value);

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
                    <label htmlFor='travel'>Travel: </label>
                    <input
                    type='number'
                    id='travel'
                    name='travel'
                    value={travel}
                    required
                    onChange={handleTravelChange} />
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