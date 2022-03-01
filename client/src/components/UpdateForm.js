import { useState } from "react";
import "../stylesheets/Forms.css"

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
                <form onSubmit={handleUpdate} className='form'>
                    <h1 id='form-header'>Update {user.userName}</h1>
                    <div className='form-input'>
                    <input
                    type='text'
                    className='input'
                    name='userName'
                    placeholder={user.userName}
                    required
                    onChange={handleNewUserName} />
                </div>
                <div className='form-input'>
                    <select
                    name='new-land-travel'
                    className='input'
                    onChange={handleNewLandTravel}>
                    <option value='' disabled selected>How do you normally travel?</option>
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
                    <input
                    type='number'
                    className='input'
                    name='new-air-travel'
                    placeholder='Flights this year?'
                    required
                    onChange={handleNewAirTravel} />
                </div>
                <div className='form-input'>
                    <input
                    type='number'
                    className='input'
                    name='new-food'
                    placeholder='Meals with meat?'
                    required
                    onChange={handleNewFood} />
                </div>
                <div className='form-input'>
                    <select
                    name='new-lifestyle'
                    className='input'
                    onChange={handleNewLifestyle}>
                    <option value='' disabled selected>Spending on clothes & products?</option>
                    <option value='1'>Less than £50 per month</option>
                    <option value='2'>Less than £100 per month</option>
                    <option value='3'>More than £100 per month</option>
                    </select>
                </div>
                <div className='form-input'>
                    <select
                    name='new-electricity'
                    className='input'
                    onChange={handleNewElectricity}>
                    <option value='' disabled selected>Electricity from renewable sources?</option>
                    <option value='0'>Yes</option>
                    <option value='1'>No</option>
                    </select>
                </div>
                <div className='form-input'>
                    <select
                    name='new-gas'
                    className='input'
                    onChange={handleNewGas}>
                    <option value='' disabled selected>Gas carbon neutral?</option>
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
}

export default UpdateForm;