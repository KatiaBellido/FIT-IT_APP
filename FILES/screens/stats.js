import React from 'react';
import {Component } from 'react';
import { StyleSheet, Text, View, ScrollView,Button, Alert, ActivityIndicator } from 'react-native';
import { StackedBarChart, ProgressCircle, XAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import firebase from '../database/firebase';


// import { HeaderMenu } from "./HeaderMenu";
const StatsPie = (props) => {
    //console.log(props.tipo);
    return <ProgressCircle style={{ height: 150,width:150, marginTop: 20, marginHorizontal: 16, flex:1}} progress={props.tipo} progressColor={'#219EBC'} strokeWidth={20} backgroundColor={'rgb(105, 109, 125,0.1)'}/>
}
const StatsBar = () => {
    const data = [
        {
            month: new Date(2015, 0, 1),
            calorias: 100,
            rutina: 150,
            meditacion: 40,
        },
        {
            month: new Date(2015, 1, 1),
            calorias: 100,
            rutina: 150,
            meditacion: 40,
        },
        {
            month: new Date(2015, 2, 1),
            calorias: 90,
            rutina: 70,
            meditacion: 40,
        },
        {
            month: new Date(2015, 3, 1),
            calorias: 40,
            rutina: 50,
            meditacion: 140,
        },
    ]
    
    const colors = ['#4D0C5A', '#8C15A3', '#AC1AC9',]
    const keys = ['calorias', 'rutina', 'meditacion']

    return (
        <StackedBarChart
            style={{ height: 200, width: 200}}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            contentInset={{ top: 30, bottom: 30 }}
        />
    )
}  

export default class Statistics extends Component{
    constructor() {
        super();
        this.state = { 
          uid: firebase.auth().currentUser.uid,
          calorias: 0.7,
          meditacion: 0.9,
          ejercicio: 0.4
        }
    }
    render(){
        return (
            <View style={styles.container}> 
                {/* <HeaderMenu/> */}
                <View style={styles.containerSafe}>
                    <ScrollView>
                        <View style={styles.box}>
                            <Text style={ styles.Title}>
                                    Anillos Del Día
                                </Text>
                            <ScrollView horizontal={true}
                            contentContainerStyle={{ ...styles.scrollView, width: `${100 * 3}%`}}>
                                <Text style={ styles.Title}>
                                    Calorías (al día)
                                </Text>
                                <StatsPie tipo={this.state.calorias}/>
                                <Text style={ styles.Title}>
                                    Ejercicio (al día)
                                </Text>
                                <StatsPie tipo={this.state.ejercicio}/>
                                <Text style={ styles.Title}>
                                    Meditación (al día)
                                </Text>
                                <StatsPie tipo={this.state.meditacion}/>
                            </ScrollView>
                        </View>
                        <View style={styles.divider}/>
                        <View style={styles.box}>
                            <Text style={ styles.Title}>
                                    Estadísticas
                                </Text>
                            <ScrollView horizontal={true}
                            contentContainerStyle={{ ...styles.scrollView, width: `${100 * 2}%`}}>
                                <Text style={ styles.Title}>
                                    Peso Cargado
                                </Text>
                                <StatsBar/>
                                <Text style={ styles.Title}>
                                    Minutos
                                </Text>
                                <StatsBar />
                            </ScrollView>
                        </View>
                        <View style={styles.divider}/>
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
        flex:1,
        marginHorizontal: 16,
    },
    box: {
        marginTop:10,
        flex: 1,
        height: 300,
        alignContent: "center",
        borderColor: "black",
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
    scrollView: {
        flexDirection: 'row',
        overflow: 'hidden',
      },
    divider: {
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        width: '95%',
        marginLeft: 12,
        marginBottom: 8,
    },
    
  });