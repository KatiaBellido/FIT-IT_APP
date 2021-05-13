import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

export default class Meditation extends Component {
    render() {
        return (
                <SafeAreaView style={styles.containerSafe}>
                <ScrollView>
                <View style={styles.textBox}>
                    <Text style={styles.title}>
                        Meditaciones guiadas para cualquier momento y ocasión
                    </Text>
                </View>
                    <TouchableOpacity style={styles.image} onPress={()=>this.props.navigation.navigate("Reproductor")}>
                        <Image source={require('../assets/med1.jpg')} style={{height:250,width:250, position:"absolute"}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.descTtitle}>
                        Aceptación
                    </Text>
                    <Text style={styles.descText}>
                        Aprende a soltar, dejar fluir, y aceptar.
                    </Text>
                    <TouchableOpacity style={styles.image} onPress={()=>this.props.navigation.navigate("Reproductor")}>
                    <Image source={require('../assets/med2.jpg')} style={{height:250,width:250, position:"absolute"}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.descTtitle}>
                        Apreciación
                    </Text>
                    <Text style={styles.descText}>
                        Descubre un sentido renovado de la gratitud por la vida.
                    </Text>
                    <TouchableOpacity style={styles.image} onPress={()=>this.props.navigation.navigate("Reproductor")}>
                    <Image source={require('../assets/med3.jpg')} style={{height:250,width:250, position:"absolute"}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.descTtitle}>
                        Balance
                    </Text>
                    <Text style={styles.descText}>
                        Reconoce la calma y conviértete en alguien menos explosivo.
                    </Text>
                    <TouchableOpacity style={styles.image} onPress={()=>this.props.navigation.navigate("Reproductor")}>
                    <Image source={require('../assets/med4.jpg')} style={{height:250,width:250, position:"absolute"}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.descTtitle}>
                        Concentración
                    </Text>
                    <Text style={styles.descText}>
                        Familiarízate con un enfoque calmado y preciso.
                    </Text>
                </ScrollView>
                </SafeAreaView>
            
        )
    }
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 20,
        color: "#023047",
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "center",
    },

    descTtitle: {
        padding: 10,
        fontSize: 18,
        color: "#023047",
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "center",
    },

    descText: {
        padding: 10,
        fontSize: 15,
        color: "#023047",
        fontWeight: "normal",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "center",
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

    image:{
        margin: 16,
        padding: 20,
        width: 350, 
        height: 230,
        left:30
    }
});
