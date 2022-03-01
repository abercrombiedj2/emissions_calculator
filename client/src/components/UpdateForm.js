import { useState } from "react";

const UpdateForm = ({user, updateUser}) => {

    const [newUserName, setNewUserName] = useState('');
    const [newLandTravel, setNewLandTravel] = useState(0);
    const [newAirTravel, setNewAirTravel] = useState(0);
    const [newFood, setNewFood] = useState(0);
    const [newLifestyle, setNewLifestyle] = useState(0);
    const [newElectricity, setNewElectricity] = useState(0);
    const [newGas, setNewGas] = useState(0);
    const [newTotal, setNewTotal] = useState(0);

    const handleNewUserName = event => setNewUserName(event.target.value);
    const handleNewLandTravel = event => setNewLandTravel(parseInt(event.target.value));
    const handleNewAirTravel = event => setNewAirTravel(parseInt(event.target.value) * 2);
    const handleNewFood = event => setNewFood(parseInt(event.target.value));
    const handleNewLifestyle = event => setNewLifestyle(parseInt(event.target.value));
    const handleNewElectricity = event => setNewElectricity(parseInt(event.target.value));
    const handleNewGas = event => setNewGas(parseInt(event.target.value));

    const handleUpdate = event => {
        event.preventDefault();
        let newTotal = 0;
        newTotal = newLandTravel + newAirTravel + newFood + newLifestyle + newElectricity + newGas;
        setNewTotal(newTotal);
        updateUser({
            _id: user._id,
            userName: newUserName,
            landTravel: newLandTravel,
            airTravel: newAirTravel,
            food: newFood,
            lifestyle: newLifestyle,
            electricity: newElectricity,
            gas: newGas,
            total: newTotal
        });
    };

    return(
        <div className='form-container'>
            <div className='update-form'>
                <form onSubmit={handleUpdate}>
                    <h1>Update {user.userName}</h1>
                    <div className='form-input'>
                    <label htmlFor='name'>Name: </label>
                    <input
                    type='text'
                    id='userName'
                    name='userName'
                    placeholder={user.userName}
                    required
                    onChange={handleNewUserName} />
                </div>
                <div className='form-input'>
                    <label htmlFor='new-land-travel'>How do you normally travel?</label>
                    <select
                    name='new-land-travel'
                    id='new-land-travel'
                    onChange={handleNewLandTravel}>
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
                    id='new-air-travel'
                    name='new-air-travel'
                    placeholder={user.airTravel}
                    required
                    onChange={handleNewAirTravel} />
                </div>
                <div className='form-input'>
                    <label htmlFor='food'>How many meals per week do you eat containing meat?</label>
                    <input
                    type='number'
                    id='new-food'
                    name='new-food'
                    placeholder={user.food}
                    required
                    onChange={handleNewFood} />
                </div>
                <div className='form-input'>
                    <label htmlFor='lifestyle'>How much do you spend on clothes, health and beauty products each month?</label>
                    <select
                    name='new-lifestyle'
                    id='new-lifestyle'
                    onChange={handleNewLifestyle}>
                    <option value='1'>Less than £50</option>
                    <option value='2'>Less than £100</option>
                    <option value='3'>More than £100</option>
                    </select>
                </div>
                <div className='form-input'>
                    <label htmlFor='electricity'>Is your electricity from renewable sources?</label>
                    <select
                    name='new-electricity'
                    id='new-electricity'
                    onChange={handleNewElectricity}>
                    <option value='0'>Yes</option>
                    <option value='1'>No</option>
                    </select>
                </div>
                <div className='form-input'>
                    <label htmlFor='gas'>Is your gas carbon neutral?</label>
                    <select
                    name='new-gas'
                    id='new-gas'
                    onChange={handleNewGas}>
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
}

export default UpdateForm;