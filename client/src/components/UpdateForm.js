import { useState } from "react";

const UpdateForm = ({user, updateUser}) => {

    const [newUserName, setNewUserName] = useState('');

    const handleNewUserName = event => setNewUserName(event.target.value);

    const handleUpdate = event => {
        event.preventDefault();
        updateUser({
            _id: user._id,
            userName: newUserName
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
                    required
                    onChange={handleNewUserName} />
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