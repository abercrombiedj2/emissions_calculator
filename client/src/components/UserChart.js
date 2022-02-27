import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const UserChart = ({user}) => {


const pieName = user.userName;
const pieTravel = parseInt(user.travel);
const pieFood = parseInt(user.food);
const pieHome = parseInt(user.home);

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
       name: pieName,
       data: [{
           name: 'Travel',
           y: pieTravel
         },
         {
           name: 'Food',
           y: pieFood
         },
         {
           name: 'Home',
           y: pieHome
         }
       ]
   }]
   };

   return (
       <div className="user-chart">
           <HighchartsReact highcharts={Highcharts} options={options} />
       </div>
   );
}

export default UserChart;