import React, { Component } from 'react';

import MenuTabs from './screens/MenuTabs';
import Signup from './screens/signup';
import Login from './screens/login';
console.disableYellowBox = true;

export default class App extends Component {
  render(){
    return(
    //<Login/>
    <Signup/>
    //<MenuTabs/>
  );

}
}