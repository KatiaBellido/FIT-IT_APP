import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default class meditaudios extends MeditPlayer {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <HeaderMenu/>
                    <SafeAreaView style={styles.containerSafe}>
                        <View style={styles.textBox}>
                            <Text style={styles.title}>
                                Aceptación
                            </Text>
                        </View>
                        <View style={styles.centered}>
                            <Button
                            color="#219EBC"
                            border-radius="50%"
                            onPress={() => Alert.alert('Audio en pausa')}>
                            </Button>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.durationBar}>
                                ---------------------------------
                            </Text>
                        </View>
                        <View style={{marginVertical:30}}>
                            <Button
                                title="Exit"
                                color="#219EBC"
                                onPress={() => Alert.alert('¿Seguro que quieres salir del audio?')}
                            />
                        </View>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    title: {
        padding: 10,
        fontSize: 18,
        color: "#023047",
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "center",
    },

    container: {
        flex: 1,
    },

    containerSafe: {
        flex: 1,
        marginHorizontal: 16,
        paddingTop: 20,
    },

    textBox: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 40,
    },

    playPause: {
        color: "#219EBC",
        borderRadius: "50%",
    },

    durationBar: {
        fontSize: 25,
        color: "#023047",
        textAlign: "center",
    },

    centered: {
        position: "fixed",
        top: "50%",
        left: "50%",
        marginTop: "50%",
        marginLeft: "50%",
    }
});

