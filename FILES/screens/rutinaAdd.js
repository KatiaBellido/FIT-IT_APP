import React, { Component, useState } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, FlatList, Picker, Pressable} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderMenu } from "./HeaderMenu";
import { Entypo } from '@expo/vector-icons';

// const _submit=(props)=>{
//     alert("Agregada")
    
//     props.navigation.navigate("Recetas")
// }

export default class RutinaAdd extends Component{
    state = {
        dia: 'lunes'
    }

    render(){
        return(
            <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titulos}>Nueva Rutina</Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Título"
                    />
                </View>
                <View style={styles.card}>
                    <View style={styles.divider}/>
                    <View style={styles.selector}>
                        <Picker
                            selectedValue={this.state.dia}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({dia: itemValue})}
                        >
                            <Picker.Item label="Lunes" value="lunes" />
                            <Picker.Item label="Martes" value="martes" />
                            <Picker.Item label="Miércoles" value="miercoles"/>
                            <Picker.Item label="Jueves" value="jueves"/>
                            <Picker.Item label="Viernes" value="viernes"/>
                            <Picker.Item label="Sábado" value="sabado"/>
                            <Picker.Item label="Domingo" value="domingo"/>
                        </Picker>
                    </View>
                    <View style={styles.divider}/>
                </View>
                <Pressable onPress={() => Alert.alert('Agregar ejercicio')}>
                    <View style={styles.card}>
                        <View style={styles.rutinaCompleta}>
                            <View style={styles.rutinaInfo}>
                                <Text style={styles.titulo}>Agregar ejercicio</Text>
                            </View>
                            <Entypo name="chevron-thin-right" size={16} color="black"/>
                        </View>
                        <View style={styles.divider}/>
                    </View>
                </Pressable>
                <Text style={styles.sub}> Notas </Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Notas"
                    />
                </View>
                <View style={styles.botonFinal}>
                    <Button
                        title="Guardar Rutina"
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
    inputStyle: {
        width: "90%",
        margin: 16,
        alignSelf: "center",
        borderColor: "#696D7D",
        borderBottomWidth: 1
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
        margin: 16,
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