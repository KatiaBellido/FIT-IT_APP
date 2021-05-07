import React, { Component } from 'react';

import MenuTabs from './screens/MenuTabs';
import Signup from './screens/signup';
import Login from './screens/login';
import Profile from './screens/profile';
import FullView from './screens/fullView';
import Rutinas from './screens/RutinasMain';
import Meditation from './screens/MeditMenu';
import Meditaudios from './screens/MeditPlayer';

console.disableYellowBox = true;

export default class App extends Component {
  render(){
    return(
    //<Profile/>
    //<FullView/>
    //<Rutinas/>
    //<Login/>
    //<Signup/>
    //<MenuTabs/>
    //<Meditation/>
    <Meditaudios/>
  );

}
}