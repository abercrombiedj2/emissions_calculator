import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UserService from '../components/UserService';
import NavBar from '../components/NavBar';
import UserList from '../components/UserList';
import EmissionsForm from '../components/EmissionsForm';
import LandingPage from '../components/LandingPage';
import UpdateForm from '../components/UpdateForm';
import LearnMore from '../components/LearnMore';

function AppContainer() {

const [users, setUsers] = useState([]);
const [selectedUser, setSelectedUser] = useState(null);

useEffect(() => {
    UserService.getUsers()
    .then(users => setUsers(users));
}, []);

const createUser = newUser => {
    UserService.addUser(newUser)
    .then(savedUser => setUsers([ ...users, savedUser]));
};

const updateUser = (updatedUser) => {
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

const onUserClick = user => setSelectedUser(user);

return(
    <Router>
        <>
            <NavBar />
            {selectedUser ? <UpdateForm user={selectedUser} updateUser={updateUser} /> : null}
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/home' component={LandingPage} />
                <Route path='/userlist' exact
                render={() => <UserList users={users} updateUser={updateUser} deleteUser={deleteUser} onUserClick={onUserClick} />}
                />
                <Route path='/emissionsform' exact
                render={() => <EmissionsForm addUser={createUser} />}
                />
                <Route path='/updateform' exact
                render={() => <UpdateForm />}
                />
                <Route path='/learnmore' exact
                render={() => <LearnMore />}
                />
            </Switch>
        </>
    </Router>
)

};

export default AppContainer;
