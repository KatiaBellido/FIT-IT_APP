import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, FlatList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderMenu } from "./HeaderMenu";
import firebase from '../database/firebase';

const ingredientes = [
    {
        id: 1,
        name: "harina"
    }
];

export default function RecetasAdd ({ navigation: { navigate } }){

    return(
        <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titulos}>Nueva Receta</Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Título"
                    />
                </View>
                <Text style={styles.sub}> Ingredientes </Text>
                <View style={styles.card}>
                    <View style={styles.ing}>
                        {ingredientes.map((ingredientes, index) => {
                            return(
                                <View key={index}>
                                    <Text style={styles.nombre}>{ingredientes.name}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.out}>
                    <View style={styles.boton}>
                        <Button
                        title="Agregar Ingrediente"
                        color="#219EBC"
                        onPress={() => Alert.alert('Ingrediente Agregado')}
                        />
                    </View>
                </View>
                <Text style={styles.sub}> Instrucciones </Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Pasos"
                    />
                </View>
                <View style={styles.botonFinal}>
                    <Button
                        title="Agregar Receta"
                        color="#023047"
                        onPress={()=>navigate('Recetas')}
                    />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titulos: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 32,
        marginRight: 32
    },
    inputStyle: {
        width: "90%",
        margin: 16,
        alignSelf: "center",
        borderColor: "#696D7D",
        borderBottomWidth: 1
    },
    sub: {
        color: 'black',
        fontWeight: 'bold',
        margin: 16,
        fontSize: 16
    },
    ing: {
        borderWidth: 1,
        width: "90%",
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        marginTop: 16,
        padding: 8,
        borderColor: "#696D7D",
        color: "#023047"
    },
    nombre: {
        margin: 4
    },
    out: {
        marginRight: 16
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
    },
    card: {
        backgroundColor: "#fafbfb",
        width: '100%'
    },
});