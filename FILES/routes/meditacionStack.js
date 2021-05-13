import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import React from "react"
import {StyleSheet}from "react-native"
import rutinas from "../screens/RutinasMain";
import Full from "../screens/fullView";
import profile from "../screens/profile";
import stats from "../screens/stats";
import Header from "../screens/HeaderMenu"
import Login from "../screens/login"
import Platillos from "../screens/Tabs/platillos"
import lasRecetas from "../screens/menu"
import RecetaAdd from "../screens/recetaAdd"
import MeditMenu from "../screens/meditMenu"
import MeditPlayer from "../screens/meditPlayer"
const screens={
    Meditacion:{
        screen: MeditMenu,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="Meditacion"/>,
                 headerLeft:()=>null
            }
        }
    },
    Reproductor:{
        screen: MeditPlayer
    }
}
const MeditationStack =createStackNavigator(screens,{
  defaultNavigationOptions: {
      headerTintColor: "#555",
      headerStyle:{backgroundColor:'#8ECAE6'}
  },
  initialRouteName:"Meditacion"
});
export default createAppContainer(MeditationStack);
