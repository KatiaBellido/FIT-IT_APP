import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
// Importar el paquete react-player de npm
import ReactPlayer from 'react-player'

export default class MeditAudios extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <SafeAreaView style={styles.containerSafe}>
                        <View style={styles.centered}>
                            {/* Utilizar el paquete instalado y pasarle el link del video */}
                            <ReactPlayer url='https://www.youtube.com/watch?v=1eeqKYU_pDY' />
                    
                    {/* Versión anterior, con propósitos únicamente estéticos
                    <Image source={require('../assets/cover.jpeg')} style={styles.imageCover}></Image>
                    <View style={styles.textBox}>
                        <Text style={styles.title}>
                            Aceptación
                        </Text>
                    </View>
                    <Image source={require('../assets/pause.png')} style={styles.imagePause}></Image>
                    <View style={{marginVertical:30}}>
                        <Button
                            title="Exit"
                            color="#219EBC"
                            onPress={() => Alert.alert('¿Seguro que quieres salir del audio?')}
                        />
                    </View>  */}
                        </View>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        paddingLeft: 30,
        fontSize: 30,
        color: "#023047",
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "left",
    },

    desc: {
        padding: 10,
        fontSize: 15,
        color: "#023047",
        fontWeight: "normal",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "left",
    },

    container: {
        flex: 1,
        backgroundColor: "#cdebf9",
    },

    containerSafe: {
        flex: 1,
        paddingTop: 10,
    },

    textBox: {
        flexDirection: 'row',
        marginVertical: 20,
    },

    imagePause:{
        marginHorizontal: 140,
        width: 120,
        height: 120,
    },

    imageCover: {
        marginHorizontal: 25,
        width: 250,
        height: 250,
    },

    espacio: {
        height: 20,
    },

    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
