import { GiFootprint } from "react-icons/gi";


const CardFoot = ({user}) => {

const userTotal = (parseInt(user.total)) * 5;
const worldTotal = 5 * 5;
const ukTotal = 13 * 5;

return(
    
    <div className="card-foot">
    <p className="world-foot">< GiFootprint size={worldTotal}px color="orange"/>World</p>
    <p className="uk-foot">< GiFootprint size={ukTotal}px color="deepskyblue"/>UK</p>
    <p className="user-foot">< GiFootprint size={userTotal}px color="crimson"/>User</p>
    </div>
)


};


export default CardFoot;