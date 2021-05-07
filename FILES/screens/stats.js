import React from 'react';
import {Component } from 'react';
import { StyleSheet, Text, View, ScrollView,Button, Alert, ActivityIndicator } from 'react-native';
import { BarChart, ProgressCircle, XAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

import { HeaderMenu } from "./HeaderMenu";
const StatsPie = () => {
    return <ProgressCircle style={{ height: 150, marginTop: 20, marginHorizontal: 16, flex:1}} progress={0.7} progressColor={'#023047'} strokeWidth={20} />
}
const StatsBar = () => {
    const fill = '#219EBC'
    const data = [1,2,3,4,5,6]
    return (
        <View>
            <BarChart style={{ height: 200}} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}/>
            <XAxis
                        style={{ marginTop: 10 }}
                        data={ data }
                        scale={scale.scaleBand}
                        formatLabel={ (value, index) => index+1 }
                        labelStyle={ { color: 'black' } }
            />
        </View>
    )
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
                        Cardío (al día)
                    </Text>
                    <StatsPie/>
                    <Text style={ styles.Title}>
                        Calorias (al día)
                    </Text>
                    <StatsPie/>
                    <Text style={ styles.Title}>
                        Peso Cargado
                    </Text>
                    <StatsBar/>
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
    box: {
        flexDirection: 'column',
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