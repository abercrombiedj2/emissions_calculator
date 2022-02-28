import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserService from '../components/UserService';
import NavBar from '../components/NavBar';
import UserCard from '../components/UserCard';
import UserList from '../components/UserList';
import EmissionsForm from '../components/EmissionsForm';

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

    // <div className='app-container'>
    //     <NavBar />
    //     <EmissionsForm addUser={createUser}/>
    //     <UserList users={users} updateUser={updateUser} deleteUser={deleteUser}/>
    // </div>
    <Router>
        <>
            <NavBar />
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/home' component={LandingPage} />
                <Route path='/user' component={UserCard} />
                <Route path='/userlist' exact
                render={() => <UserList users={users} updateUser={updateUser} deleteUser={deleteUser}/>}
                />
                <Route path='/emissionsform' exact
                render={() => <EmissionsForm addUser={createUser} />}
                />
            </Switch>
        </>
    </Router>

)

};

export default AppContainer;
