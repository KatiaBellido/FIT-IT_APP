import React from 'react';
import {Component } from 'react';
import { StyleSheet, Text, View, ScrollView,Button, Alert, ActivityIndicator } from 'react-native';
import ActivityRings from "react-native-activity-rings"; 
import { HeaderMenu } from "./HeaderMenu";
 
const Stats = () => {
 
 const activityData = [
    {
      label: "Mes",
      value: 0.8, // ring will use color from theme
      color: "#023047",
    },
    {
        label: "Semana",
        value: 0.6,
        color: "#219EBC",
    },
    {
        label: "Día",
        value: 0.2,
        color: "#4D0C5A",
    }
  ];
 
 const activityConfig = { 
   width: 150,  
   height: 150
 };
 
 return (
  <View>
    <ActivityRings theme={"light"} legend = {true} data={activityData} config={activityConfig} /> 
  </View>
  );
}  

export default class Statistics extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <HeaderMenu/>
                <View style={styles.containerSafe}>
                    {/* <ActivityIndicator/> */}
                    <ScrollView>
                    <Text style={ styles.Title}>
                        Productividad (entrar todos los días del mes)
                    </Text>
                    <Stats/>
                    <Text style={ styles.Title}>
                        Peso Cargado
                    </Text>
                    <Text style={ styles.Title}>
                        minutos
                    </Text>
                    <Button
                        title="Go back"
                        color="#219EBC"
                        onPress={() => Alert.alert('Regresa si quieres')}
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(105,109,125, 0.1)",
    },
    containerSafe: {
      flex: 1,
      marginHorizontal: 16,
    },
    image:{
        margin: 16,
        padding: 20,
        width: 80, 
        height:80,
    },
    Title: {
        padding: 10,
        fontSize: 16,
        color: "#023047",
        fontWeight: "bold",
        textAlign: "center",
        
    },
    
  });
  