import UserChart from "./UserChart";
import {FaTrash, FaEdit} from 'react-icons/fa';
import CardFoot from './ChartFoot';

const UserCard = ({user, updateUser, deleteUser, onUserClick}) => {


    const handleDeleteUser = () => deleteUser(user._id);

    const handleUserClick = () => onUserClick(user);

    return (
        <div className='user-card'>
            <h2 onClick={handleUserClick}>User: {user.userName}</h2>
            <p>Land travel: {user.landTravel} tonnes</p>
            <p>Air travel: {user.airTravel} tonnes</p>
            <p>Food: {user.food} tonnes</p>
            <p>Lifestyle: {user.lifestyle} tonnes</p>
            <p>Electricity: {user.electricity} tonnes</p>
            <p>Gas: {user.gas} tonnes</p>
            <p>Total emissions: {user.total} tonnes</p>
            <button onClick={handleDeleteUser}> <FaTrash/> </button>
            <button value={user} onClick={handleUserClick}><FaEdit/></button>
            <UserChart user={user} />
            <CardFoot user={user} />
            
        </div>
    )
};

export default UserCard;