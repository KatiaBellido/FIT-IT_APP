import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import React from "react"
import {StyleSheet}from "react-native"
import rutinas from "../screens/RutinasMain";
import full from "../screens/fullView";
import profile from "../screens/profile";
import stats from "../screens/stats";
import Header from "../screens/HeaderMenu"
const screens={
    Profile:{
        screen: profile,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="Profile"/>
            }
        }
    },
    Stats:{
        screen:stats
    },
    // Full:{
    //     screen:full
    // }
}
const HomeStack =createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: "#555",
        headerStyle:{backgroundColor:'#8ECAE6'}
    }
});
export default createAppContainer(HomeStack);
