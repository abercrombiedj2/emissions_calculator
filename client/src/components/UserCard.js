import UserChart from "./UserChart";
import CardFoot from "./CardFoot";

const UserCard = ({user, updateUser, deleteUser}) => {


    const handleDeleteUser = () => {
        deleteUser(user._id);
    }

    return (
        <div className='user-card'>
            <h2>Name: {user.userName}</h2>
            <p>Land travel: {user.landTravel} tonnes</p>
            <p>Air travel: {user.airTravel} tonnes</p>
            <p>Food: {user.food} tonnes</p>
            <p>Lifestyle: {user.lifestyle} tonnes</p>
            <p>Electricity: {user.electricity} tonnes</p>
            <p>Gas: {user.gas} tonnes</p>
            <p>Total emissions: {user.total} tonnes</p>
            <button onClick={handleDeleteUser}> 🗑 </button>
            {/* <button onClick={handleEditUser}></button> */}
            <UserChart user={user} />
            <CardFoot />
        </div>
    )
};

export default UserCard;