import React, { Component, useState } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, FlatList, Picker, Pressable} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderMenu } from "./HeaderMenu";
import { Entypo } from '@expo/vector-icons';

// const _submit=(props)=>{
//     alert("Agregada")
    
//     props.navigation.navigate("Recetas")
// }

export default class EjercicioAdd extends Component{
    state = {
        dia: 'lunes'
    }

    render(){
        return(
            <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titulos}>Nuevo Ejercicio</Text>
                <Pressable onPress={() => Alert.alert('Agregar ejercicio')}>
                    <View style={styles.card}>
                        <View style={styles.rutinaCompleta}>
                            <View style={styles.rutinaInfo}>
                                <Text style={styles.titulo}>Agregar ejercicio</Text>
                            </View>
                            <View style={styles.icon}>
                                <Entypo name="chevron-thin-right" size={16} color="black"/>
                            </View>
                        </View>
                        <View style={styles.divider}/>
                    </View>
                </Pressable>
                <Pressable onPress={() => Alert.alert('Agregar ejercicio')}>
                    <View style={styles.card}>
                        <View style={styles.rutinaCompleta}>
                            <View style={styles.rutinaInfo}>
                                <Text style={styles.titulo}>Añadir Serie</Text>
                            </View>
                            <View style={styles.icon}>
                                <Entypo name="circle-with-plus" size={16} color="#023047"/>
                            </View>
                        </View>
                        <View style={styles.divider}/>
                    </View>
                </Pressable>
                <View style={styles.card}>
                    <View style={styles.selector}>
                        <Picker
                            selectedValue={this.state.dia}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({dia: itemValue})}
                        >
                            <Picker.Item label="Brazo" value="brazo" />
                            <Picker.Item label="Pierna" value="pierna" />
                            <Picker.Item label="Abdomen" value="abdomen"/>
                            <Picker.Item label="Espalda" value="espalda"/>
                            <Picker.Item label="Completo" value="completo"/>
                        </Picker>
                    </View>
                </View>
                <Text style={styles.sub}> Notas </Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Notas"
                    />
                </View>
                <View style={styles.botonFinal}>
                    <Button
                        title="Guardar Ejercicio"
                        color="#023047"
                        onPress={()=>_submit(this.props)}
                    />
                </View>
            </SafeAreaView>
            </>
        );
    }
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
    botonFinal: {
        margin: 16
    },
    selector: {
        paddingTop: 4,
        paddingBottom: 4,
        marginRight: 4,
        alignItems: "flex-start",
        marginLeft: 8
    },
    picker: { 
        height: 50, 
        width: '100%'
    },
    rutinaCompleta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        margin: 16
    },
    rutinaInfo: {
        flex: 1,
        paddingBottom: 12
    },
    sub: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        marginLeft: 24,
        marginRight: 24,
        fontSize: 16
    },
    inputBox: {
        width: "90%",
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        marginTop: 16,
        padding: 8,
        alignSelf: "center",
        borderColor: "#696D7D",
        color: "#023047",
        borderWidth: 1
    },
    card: {
        backgroundColor: "#fafbfb",
        width: '100%'
    },
    divider: {
        borderBottomColor: '#a5a5a5',
        borderBottomWidth: 1,
        width: '100%'
    },
    icon: {
        marginRight: 4
    }
});