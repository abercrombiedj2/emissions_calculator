import { GiFootprint } from "react-icons/gi";
import "../stylesheets/CardFoot.css"

const CardFoot = ({user}) => {

return(
    
    <div className="card-foot">
    <p className="world-foot">< GiFootprint size="30px" />World</p>
    <p className="uk-foot">< GiFootprint size="80px"/>UK</p>
    <p className="user-foot">< GiFootprint size="60px"/>User</p>
    </div>
)


};


export default CardFoot;