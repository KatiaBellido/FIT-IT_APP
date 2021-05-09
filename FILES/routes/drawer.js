import { createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
//import HeaderMenu from "../screens/HeaderMenu"
// import MeditMenu from "../screens/MeditMenu";
//import rutinas from "../screens/RutinasMain";
import full from "../screens/fullView";
import profile from "../screens/profile";
import homeStack from './homeStack';
import rutinasStack from "./rutinasStack";
import Login from "../screens/login";
import Singup from "../screens/signup";




const RootDrawerNavigator=createDrawerNavigator({
    Profile:{
        screen: homeStack,
    },
    Rutinas:{
        screen:rutinasStack,
    },
    Logout:{
        screen:Login,
    },
    Singup:{
        screen:Singup,
    },
    // Full:{
    //     screen:full
    // }
});
export default createAppContainer(RootDrawerNavigator);