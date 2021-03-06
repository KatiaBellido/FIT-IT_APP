import React, { Component } from 'react';
import {Dimensions, StyleSheet, Modal, Share, View, Text, Switch, SafeAreaView, Alert, Image, StatusBar, ImageBackground, ScrollView} from 'react-native';
import {Container, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export default function FullView ({navigation:navigate}){
    const receta=(navigate.state.params.data);
    //console.log(receta)
        return(
            <View style={styles.container}>
                <ScrollView>
                <StatusBar barStyle="light-content" />
                <View style={styles.menubar}>
                            <View style={styles.back}>
                            <Text style={styles.bold}> {receta.nombre} </Text>
                            </View>
                        </View>
                <ImageBackground source = {{uri:receta.imagen}} style={styles.recetaFondo}>
                    <SafeAreaView>
                        
                        <View style={styles.mainReceta}>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
                <View style={styles.contenedorReceta}>
                    <Text style={styles.bold}> Ingredientes </Text>
                    <Text> {receta.ingredientes} </Text>
                    <View style={styles.instrucciones}>
                        <Text style={styles.bold}> Preparacion </Text>
                        <Text>{receta.preparacion}</Text>
                </View>
                </View>
                </ScrollView>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        color: 'black'
    },
    recetaFondo: {
        width: '100%'
    },
    menubar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    heart: {
        marginRight: 4
    },
    share: {
        marginLeft: 4
    },
    mainReceta: {
        paddingTop: 0,
        paddingRight: 32,
        marginTop: 200,
        marginBottom: 32,
        flexDirection: 'row'
    },
    titulos: {
        fontSize: 32,
        color: 'black',
        fontWeight: "900"
    },
    bold: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8
    },
    sub: {
        marginLeft: 8
    },
    divider: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        width: 150,
        marginTop: 8,
        marginLeft: 12,
        marginBottom: 8
    },
    contenedorReceta: {
        marginTop: -20,
        padding: 16,
        backgroundColor: 'white',
    },
    instrucciones: {
        alignContent: 'space-around',
        marginTop: 16,
    },
    paso: {
        marginTop: 8,
        textAlign: 'justify'
    }
});