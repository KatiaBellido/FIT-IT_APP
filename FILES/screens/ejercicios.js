import React, { Component } from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderMenu } from "./HeaderMenu";
import {View, StyleSheet, Image, Text, SafeAreaView, ScrollView, Pressable, Alert, Button, TouchableOpacity} from 'react-native';
import {Card, CardItem} from 'native-base';
import { Entypo } from '@expo/vector-icons';
import firebase from '../database/firebase';

const listaRutina = [
    {
        id: '1',
        titulo: "Chin-Ups",
        series: "1 serie",
        repos: "12 repeticiones",
        peso: "10.00 kg"
    },
    {
        id: '2',
        titulo: "Barbell Front Press",
        series: "1 serie",
        repos: "12 repeticiones",
        peso: "10.00 kg"
    },
    {
        id: '3',
        titulo: "Dumbbell One-Arm Rows",
        series: "1 serie",
        repos: "12 repeticiones",
        peso: "10.00 kg"
    },
    {
        id: '4',
        titulo: "Incline Barbell Bench Press",
        series: "1 serie",
        repos: "12 repeticiones",
        peso: "10.00 kg"
    },
    {
        id: '5',
        titulo: "Bench Dips",
        series: "1 serie",
        repos: "12 repeticiones",
        peso: "10.00 kg"
    },
    {
        id: '6',
        titulo: "Barbell Curls",
        series: "1 serie",
        repos: "12 repeticiones",
        peso: "10.00 kg"
    },
    {
        id: '7',
        titulo: "Press Frances",
        series: "1 serie",
        repos: "12 repeticiones",
        peso: "10.00 kg"
    },
    {
        id: '8',
        titulo: "Incline Dumbbells Curls",
        series: "1 serie",
        repos: "12 repeticiones",
        peso: "10.00 kg"
    }
];

export default function Rutinas ({ navigation: { navigate } }){
    
    return(
        <>
            <View>
                <ScrollView>
                <SafeAreaView>
                        <View style={styles.rutina}>
                            {listaRutina.map((listaRutina, index) => {
                                return(
                                    <Pressable onPress={() => Alert.alert('Ver rutina')}>
                                        <View style={styles.card}>
                                            <View style={styles.rutinaCompleta} key={index}>
                                                <View style={styles.rutinaInfo}>
                                                    <Text style={styles.titulo}>{listaRutina.titulo}</Text>
                                                    <Text style={styles.series}>{listaRutina.series}</Text>
                                                    <Text style={styles.extra}>{listaRutina.repos} · {listaRutina.peso}</Text>
                                                </View>
                                                <View style={styles.icon}>
                                                    <Entypo name="chevron-thin-right" size={16} color="black" />
                                                </View>
                                            </View>
                                            <View style={styles.divider}/>
                                        </View>
                                    </Pressable>
                                )
                            })}
                        </View>
                </SafeAreaView>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.botonFlot} onPress={() => navigate('EjercicioAdd')}>
                <Entypo name="plus" size={36} color="#023047" />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    containerSafe: {
        backgroundColor: '#8ECAE6',
    },
    header: {
        marginTop: 50,
        flexDirection: "row",
        alignItems:"center",
        backgroundColor: '#8ECAE6',
        padding:10
    },
    image:{
        width: 60, 
        height:60,
    },
    text:{
        fontSize:16,
        color: "white",
        flex:1.7,
        textAlign:"center"
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    series: {
        fontSize: 12
    },
    extra: {
        fontSize: 12,
        opacity: 0.6
    },
    rutinaCompleta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginLeft: 12,
        marginTop: 8
    },
    rutinaInfo: {
        flex: 1,
        marginLeft: 12
    },
    botonFlot: {
        backgroundColor: '#8ECAE6',
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 45,
        right: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginRight: 16
    },
    card: {
        backgroundColor: "#fafbfb",
        width: '100%'
    },
    divider: {
        borderBottomColor: '#a5a5a5',
        borderBottomWidth: 1,
        width: '100%'
    }
});