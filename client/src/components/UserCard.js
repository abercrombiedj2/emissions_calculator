import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserCard = ({user, updateUser, deleteUser}) => {

   const nameOfUser = user.userName
   const travelData = user.travel
   const foodData = user.food
   const homeData = user.home


    const options = {
        chart: {
          renderTo: 'container',
          type: 'pie'
      },
      title: {
          text: 'Emissions'
      },
      yAxis: {
          title: {
              text: 'User Emissions'
          }
      },
      
      series: [{
          type: 'pie',
          name: {nameOfUser},
          data: [{
              name: 'Travel',
              y: {travelData}
            },
            {
              name: 'Food',
              y: {foodData}
            },
            {
              name: 'Home',
              y: {homeData}
            }
          ]
      }]
      };

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
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
};

export default UserCard;