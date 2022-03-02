import UserChart from "./UserChart";
import { FaTrash, FaEdit} from "react-icons/fa";
import CardFoot from "./ChartFoot";
import CountUp from 'react-countup';


import "../stylesheets/UsersCards.css";


const UserCard = ({user, updateUser, deleteUser, onUserClick}) => {


    const handleDeleteUser = () => deleteUser(user._id);

    const handleUserClick = () => onUserClick(user);

    return (
        <div className='user-card'>

            <h2>{user.userName}</h2>

            <p>Land travel: {user.landTravel} tons</p>
            <p>Air travel: {user.airTravel} tons</p>
            <p>Food: {user.food} tons</p>
            <p>Lifestyle: {user.lifestyle} tons</p>
            <p>Electricity: {user.electricity} tons</p>
            <p>Gas: {user.gas} tons</p>
            <p className="counter-number">Total emissions: <CountUp className="counter-number"end={user.total} duration={2} /> tons</p>
            <button onClick={handleDeleteUser}> <FaTrash/> </button>
            <button value={user} onClick={handleUserClick}><FaEdit/></button>
            <UserChart user={user} />
            <CardFoot user={user} />
            
        </div>
    )
};

export default UserCard;