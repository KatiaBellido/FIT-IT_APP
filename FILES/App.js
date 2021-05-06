import React, { Component } from 'react';

import MenuTabs from './screens/MenuTabs';
import Signup from './screens/signup';
import Login from './screens/login';
import Profile from './screens/profile';
import FullView from './screens/fullView';

console.disableYellowBox = true;

export default class App extends Component {
  render(){
    return(
    //<Profile/>
    <FullView/>
    //<Login/>
    //<Signup/>
    //<MenuTabs/>
  );

}
}