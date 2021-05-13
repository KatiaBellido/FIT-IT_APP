import React, { Component } from 'react';

import MenuTabs from './screens/MenuTabs';
import Signup from './screens/signup';
import Login from './screens/login';
import Profile from './screens/profile';
import FullView from './screens/fullView';
import Rutinas from './screens/RutinasMain';
import Meditation from './screens/meditMenu';
import Statistics from './screens/stats';
import Meditaudios from './screens/meditPlayer';
import Navigator from "./routes/drawer";
import RecetasAdd from './screens/recetaAdd';

console.disableYellowBox = true;
var con=0;
export default class App extends Component {
  
  render(){
      return(

    //<Profile/>
    //<FullView/>
    // <Rutinas/>
    //<Login/>
    //<Signup/>
    // <MenuTabs/>
    // <Meditation/>
    //<Meditaudios/>
    //<Statistics/>
    <Navigator/>

   );

}
}