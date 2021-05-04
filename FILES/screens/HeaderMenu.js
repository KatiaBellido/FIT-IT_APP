import React from 'react';
import { StyleSheet, Text, View, Switch, Image  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
export const HeaderMenu = () =>{

    return (    
        <View style={styles.container}>
          <Image source={require('../assets/LogoFIT_IT.png')} style={styles.image} />
          <Text style={styles.text}>RECETAS</Text>
          <Text style={styles.text}>Lunes 15 Feb</Text> 
          <Ionicons name="ios-calendar-outline" size={45} color="#023047" />
        </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    backgroundColor: '#8ECAE6',
    padding:10
  },
  image:{
      width: 60, 
      height:60,
  },
  switch:{
    backgroundColor:"black",
    flex:1,
  },
  text:{
    fontSize:16,
    color: "white",
    flex:1.7,
    textAlign:"center"
  },
  fecha:{

  }

});

