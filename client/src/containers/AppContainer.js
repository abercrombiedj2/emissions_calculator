import {useState, useEffect} from 'react';
import EmissionsForm from '../components/EmissionsForm';
import './App.css';


function App() {

const [users, setUsers] = useState([]);


useEffect(() => {
    UserService.getUsers()
    .then(users => setUsers(users));
}, []);

const createUser = newUser => {
    UserService.addUser(newUser)
    .then(savedUser => setUsers([ ...users, savedUser]));
};

const updateUser = updatedUser => {
    UserService.updateUser(updatedUser);
    
    const updatedUserIndex = users.findIndex(user => user._id === updatedUser._id);
    const updatedUsers = [...users];
    updatedUsers[updatedUserIndex] = updatedUser;
    setUsers(updatedUsers); 
};






return(
    <div className='container'>
        <EmissionsForm addUser={createUser}/>
    </div>
)



export default App;





};





// addUser