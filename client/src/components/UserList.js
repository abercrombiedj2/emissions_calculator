import UserCard from './UserCard';

const UserList = ({users, updateUser, deleteUser, onUserClick}) => {
    const userNodes = users.map(user => {
        return <UserCard
            key={user._id}
            user={user}
            updateUser={updateUser}
            deleteUser={deleteUser}
            onUserClick={onUserClick}
            />
    });
    return (
        <div className='user-list'>
            {userNodes}
        </div>
    )

};

export default UserList;