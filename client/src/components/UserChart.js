import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';




const UserChart = ({user}) => {


const pieName = user.userName;
const pieLandTravel = parseInt(user.landTravel);
const pieAirTravel = parseInt(user.airTravel);
const pieFood = parseInt(user.food);
const pieLifestyle = parseInt(user.lifestyle);
const pieElectricity = parseInt(user.electricity);
const pieGas = parseInt(user.gas);
const pieTotal = parseInt(user.total);

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
           name: 'Land Travel',
           y: pieLandTravel
         },
         {
           name: 'Air Travel',
           y: pieAirTravel
         },
         {
           name: 'Food',
           y: pieFood
         },
         {
           name: 'Lifestyle',
           y: pieLifestyle
         },
         {
           name: 'Electricity',
           y: pieElectricity
         },
         {
           name: 'Gas',
           y: pieGas
         },
         
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