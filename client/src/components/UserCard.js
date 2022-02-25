const UserCard = ({user, updateUser, deleteUser}) => {

    const handleDeleteUser = () => {
        deleteUser(user._id);
    }

    return (
        <div className='user-card'>
            <h2>{user.userName}</h2>
            <p>{user.travel}</p>
            <p>{user.food}</p>
            <p>{user.home}</p>
            <button onClick={handleDeleteUser}> 🗑 </button>
        </div>
    )
};

export default UserCard;