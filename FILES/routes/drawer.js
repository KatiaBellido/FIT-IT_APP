import { createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import full from "../screens/fullView";
import profile from "../screens/profile";
import homeStack from './homeStack';
import rutinasStack from "./rutinasStack";
import Login from "../screens/login";
import Singup from "../screens/signup";
import RecetasStack from "./recetasStack";
import Meditacion from "./meditacionStack";


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
    Recetas:{
        screen:RecetasStack
    },
    Meditacion:{
        screen:Meditacion
    }

    // Full:{
    //     screen:full
    // }
});
export default createAppContainer(RootDrawerNavigator);