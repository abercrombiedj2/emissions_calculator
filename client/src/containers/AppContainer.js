import {useState, useEffect} from 'react';
import EmissionsForm from '../components/EmissionsForm';
import UserService from '../components/UserService';
import UserList from '../components/UserList';
import NavBar from '../components/NavBar';




function AppContainer() {

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

const deleteUser = idToDelete => {
    UserService.deleteUser(idToDelete);
    setUsers(users.filter(user => user._id !== idToDelete));
};



return(
    <div className='app-container'>
        <NavBar />
        <EmissionsForm addUser={createUser}/>
        <UserList users={users} updateUser={updateUser} deleteUser={deleteUser}/>
    </div>
)

};

export default AppContainer;
