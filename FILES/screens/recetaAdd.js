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
const _submit=(props, data)=>{
    console.log(data.uid);
    console.log(Object.values(data));
    const docBD = data.uid+"_"+data.receta ;
    console.log(docBD);
    const dbh = firebase.firestore();
    
    dbh.collection("SugerenciasReceta").doc(docBD).set({
        categoria: "POSTRES",
        imagen: "google.com",
        ingredientes: "chocolate",
        nombre: data.receta,
        preparacion: data.instrucciones
    })

    alert("Agregada")
    props.navigation.navigate("Recetas")
}
export default class RecetasAdd extends Component{

    constructor() {
        super();
        this.state = { 
          uid: firebase.auth().currentUser.uid,
          receta: "",
          instrucciones: "",
          ingredientes: "",
        }
      };

      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      };
    render(){

        return(
            <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titulos}>Nueva Receta</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Título"
                    value={this.state.receta}
                    onChangeText={(val) => this.updateInputVal(val, "receta")}
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
                    value={this.state.instrucciones}
                    onChangeText={(val) => this.updateInputVal(val, "instrucciones")}
                />
                <View style={styles.botonFinal}>
                    <Button
                        title="Agregar Receta"
                        color="#023047"
                        onPress={()=>_submit(this.props, this.state)}
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