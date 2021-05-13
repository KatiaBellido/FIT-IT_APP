import React from 'react';
import { StyleSheet, Text, View, Switch, Image,Touchable, TouchableHighlight, TouchableOpacity, ImageBackground} from 'react-native';
import { Ionicons,MaterialIcons } from '@expo/vector-icons'; 
import menu from "../routes/drawer"
import { Left } from 'native-base';
export default function HeaderMenu ({navigation,title}){
  const _openMenu =() => {
    navigation.openDrawer();
    // alert("Listo")
  
  };
    return (  
    
        <View style={styles.header}>
          <TouchableOpacity onPress={_openMenu} style={styles.image} >
            {/* < Image source={require('../assets/LogoFIT_IT.png')} width={1} heigh={1}/> */}
            <Image source={require('../assets/LogoFIT_IT.png')} style={{height:50,width:50, position:"absolute"}}/>
          </TouchableOpacity>
          {/* <MaterialIcons size={60} name="menu" style={styles.image} onPress={openMenu}/> */}
          <View>
          <Text style={styles.headerText}>{title}</Text>
          </View>
          {/* <Text style={styles.text}>Lunes 15 Feb</Text>  */}
        </View>
      );
}

const styles = StyleSheet.create({
  header:{
    width:"100%",
    height:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"

  },
  image:{
    // position:"absolute",
    left:-115,
    height:50,
    width:50,
    marginTop:10,
    marginBottom:10,
  },
  headerText:{
    fontWeight:"bold",
    fontSize:16,
    color: "white",
    letterSpacing:1,
    padding:-5,
    alignItems:"center"
  },

});

