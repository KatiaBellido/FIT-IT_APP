import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import React from "react"
import {StyleSheet}from "react-native"
import rutinas from "../screens/RutinasMain";
import full from "../screens/fullView";
import profile from "../screens/profile";
import stats from "../screens/stats";
import Header from "../screens/HeaderMenu"
import Login from "../screens/login"

const screens={
    Profile:{
        screen: profile,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="Profile"/>,
                 headerLeft:()=>null
            }
        }
    },
    Stats:{
        screen:stats
    },
    Login:{
      screen:Login
    }
    // Full:{
    //     screen:full
    // }
}
const HomeStack =createStackNavigator(screens,{
  defaultNavigationOptions: {
      headerTintColor: "#555",
      headerStyle:{backgroundColor:'#8ECAE6'}
  },
  initialRouteName:"Login"
});
export default createAppContainer(HomeStack);
