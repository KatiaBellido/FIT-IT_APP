import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderMenu } from "./HeaderMenu";

export default class meditation extends MeditMenu {
    render() {
        return (
            <View style={styles.container}>
                <HeaderMenu/>
                <SafeAreaView style={styles.containerSafe}>
                <View style={styles.textBox}>
                    <Text style={styles.title}>
                        Meditación
                    </Text>
                    <Text style={styles.subtitle}>
                        Meditaciones guiadas para cualquier ocasión
                    </Text>
                </View>
                <View style={styles.imageColumn}>
                    <Image source={require('../assets/med1.jpg')} style={styles.image}></Image>
                    <Text style={styles.descTtitle}>
                        Aceptación
                    </Text>
                    <Text style={styles.descText}>
                        Aprende a soltar, dejar fluir, y aceptar.
                    </Text>
                </View>
                <View style={styles.imageColumn}>
                    <Image source={require('../assets/med2.jpg')} style={styles.image}></Image>
                    <Text style={styles.descTtitle}>
                        Apreciación
                    </Text>
                    <Text style={styles.descText}>
                        Descubre un sentido renovado de la gratitud por la vida.
                    </Text>
                </View>
                <View style={styles.imageColumn}>
                    <Image source={require('../assets/med3.jpg')} style={styles.image}></Image>
                    <Text style={styles.descTtitle}>
                        Balance
                    </Text>
                    <Text style={styles.descText}>
                        Reconoce la calma y conviértete en alguien menos explosivo.
                    </Text>
                </View>
                <View style={styles.imageColumn}>
                    <Image source={require('../assets/med4.jpg')} style={styles.image}></Image>
                    <Text style={styles.descTtitle}>
                        Concentración
                    </Text>
                    <Text style={styles.descText}>
                        Familiarízate con un enfoque calmado y preciso.
                    </Text>
                </View>
                <View style={{marginVertical:30}}>
                    <Button
                        title="Go back"
                        color="#219EBC"
                        onPress={() => Alert.alert('Regresa si quieres')}
                    />
                </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    title: {
        padding: 10,
        fontSize: 16,
        color: "#023047",
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "center",
    },

    subtitle: {
        padding: 10,
        fontSize: 14,
        color: "#023047",
        fontWeight: "normal",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "center",
    },

    descTtitle: {
        padding: 10,
        fontSize: 10,
        color: "#023047",
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "left",
    },

    descText: {
        padding: 10,
        fontSize: 8,
        color: "#023047",
        fontWeight: "normal",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "left",
    },

    container: {
        flex: 1,
        backgroundColor: "rgba(105,109,125,0.1)",
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
        marginVertical: 20,
    },

    imageColumn: {
        float: "left",
        width: "50%",
        padding: 5,
    },

    image:{
        margin: 16,
        padding: 20,
        width: 110, 
        height:80,
    }
});