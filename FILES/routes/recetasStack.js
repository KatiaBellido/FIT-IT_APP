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
const screens={
    Recetas:{
        screen: lasRecetas,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="Recetas"/>,
                 headerLeft:()=>null
            }
        }
    },
    Full:{
      screen:Full
    },
    Aniadir:{
        screen: RecetaAdd
    } 
    // Full:{
    //     screen:full
    // }
}
const RecetasStack =createStackNavigator(screens,{
  defaultNavigationOptions: {
      headerTintColor: "#555",
      headerStyle:{backgroundColor:'#8ECAE6'}
  },
  initialRouteName:"Recetas"
});
export default createAppContainer(RecetasStack);
