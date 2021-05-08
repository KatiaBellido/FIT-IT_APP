import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, FlatList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderMenu } from "./HeaderMenu";

const ingredientes = [
    {
        id: 1,
        name: "harina"
    }
];

export default class RecetasAdd extends Component{
    render(){
        return(
            <>
            <HeaderMenu/>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titulos}>Nueva Receta</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Título"
                />
                <Text style={styles.sub}> Ingredientes </Text>
                <View style={styles.ing}>
                    {ingredientes.map((ingredientes, index) => {
                        return(
                            <View style={styles.rutinaCompleta} key={index}>
                                <Text style={styles.nombre}>{ingredientes.name}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.boton}>
                    <Button
                    title="Agregar Ingrediente"
                    color="#219EBC"
                    onPress={() => Alert.alert('Ingrediente Agregado')}
                    />
                </View>
                <Text style={styles.sub}> Instrucciones </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Pasos"
                />
                <View style={styles.botonFinal}>
                    <Button
                        title="Agregar Receta"
                        color="#023047"
                        onPress={() => Alert.alert('Receta Agregado')}
                    />
                </View>
            </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    titulos: {
        fontSize: 16,
        color: 'black',
        fontWeight: "bold"
    },
    inputStyle: {
        width: "100%",
        margin: 16,
        padding: 8,
        alignSelf: "center",
        borderColor: "#696D7D",
        color: "#023047",
        borderBottomWidth: 1
    },
    sub: {
        color: 'black',
        fontWeight: 'bold'
    },
    ing: {
        marginTop: 16,
        borderColor: 'black',
        borderWidth: 1,
        height: 32,
        width: "100%"
    },
    nombre: {
        margin: 4
    },
    boton: {
        marginTop: 16,
        marginBottom: 16,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    botonFinal: {
        margin: 16
    }
});