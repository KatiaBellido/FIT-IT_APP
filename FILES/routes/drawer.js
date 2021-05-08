import { createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
//import HeaderMenu from "../screens/HeaderMenu"
// import MeditMenu from "../screens/MeditMenu";
//import rutinas from "../screens/RutinasMain";
import full from "../screens/fullView";
import profile from "../screens/profile";
import homeStack from './homeStack';
import rutinasStack from "./rutinasStack"



const RootDrawerNavigator=createDrawerNavigator({
    Profile:{
        screen: homeStack,
    },
    Rutinas:{
        screen:rutinasStack
    },
    // Full:{
    //     screen:full
    // }
});
export default createAppContainer(RootDrawerNavigator);