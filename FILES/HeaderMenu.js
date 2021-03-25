import React from 'react';
import { StyleSheet, Text, View, Switch, Image  } from 'react-native';

export const HeaderMenu = () =>{

    return (    
        <View style={styles.container}>
          <Image source={{uri: 'https://reactjs.org/logo-og.png'}}style={styles.image} />
          <Text style={styles.text}>RECETAS</Text>
          <Text style={styles.text}>Lunes 15 Feb</Text> 
          <Image source={{uri: 'https://reactjs.org/logo-og.png'}}style={styles.image} />
        </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#8ECAE6',
    paddingTop:0,
  
  },
  image:{
    flex:1,
    width:20,
    height:20,
    paddingTop:70,
  },
  switch:{
    backgroundColor:"black",
    flex:1,
  },
  text:{
    color: "white",
    padding:10,
    flex:1,
    textAlign:"center",
  },
  fecha:{

  }

});

