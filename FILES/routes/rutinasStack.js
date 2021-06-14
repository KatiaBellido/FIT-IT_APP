import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import rutinas from "../screens/RutinasMain";
import React from "react"
import Header from "../screens/HeaderMenu"
import ejercicios from "../screens/ejercicios"
// import full from "../screens/fullView";
// import profile from "../screens/profile";
const screens={
    Rutinas:{
        screen:rutinas,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="Rutinas"/>
            }
        }
    },
    Ejercicios:{
        screen:ejercicios
    }
    
    // AQUI VAN CADA UNA DE LAS PANTALLAS QUE FORMARAN PARTE DEL STACK, PROFILE ESTA DE PRUEBA.

    // Rutinas:{
    //     screen:rutinas
    // },
    // Full:{
    //     screen:full
    // }
}
const RutinasStack =createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: "#555",
        headerStyle:{backgroundColor:'#8ECAE6'}
    },
    initialRouteName:"Rutinas"
});
export default createAppContainer(RutinasStack);