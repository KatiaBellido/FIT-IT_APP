import React, { Component, useEffect, useState } from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderMenu } from "./HeaderMenu";
import { View, StyleSheet, Image, Text, SafeAreaView, ScrollView, Pressable, Alert, Button, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import firebase from '../database/firebase';
const db = firebase.firestore().collection("users");



const listaRutina = [
    {
        id: '1',
        titulo: "Pierna",
        intensidad: "Alta",
        fecha: "06/05/2021"
    },
    {
        id: '2',
        titulo: "Bicep",
        intensidad: "Moderada",
        fecha: "07/05/2021"
    },
    {
        id: '3',
        titulo: "Pompa",
        intensidad: "Baja",
        fecha: "01/05/2021"
    },
    {
        id: '4',
        titulo: "Tricep",
        intensidad: "Baja",
        fecha: "02/05/2021"
    },
    {
        id: '5',
        titulo: "Brazo",
        intensidad: "Alta",
        fecha: "10/05/2021"
    },
    {
        id: '6',
        titulo: "Abdomen",
        intensidad: "Intermedia",
        fecha: "14/05/2021"
    },
    {
        id: '7',
        titulo: "Brazo",
        intensidad: "Baja",
        fecha: "03/05/2021"
    }
];
//const [isLoaded,setLoaded]=useState({Name:"NULL",Intensidad:"NULL",Fecha:"10/20/11"})
export default function Rutinas({ navigation: { navigate } }) {
    const [user, setUser] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const [rutinas, setRutinas] = useState([{ Nombre: "NULL", Intensidad: "NULL", Fecha: "NULL" }]);
    useEffect(() => {
        const fetch= async()=> {
            try {
                const dbRef = db.doc(firebase.auth().currentUser.uid);
                const doc = await dbRef.get();
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    setUser(doc.data());
                    if(doc.data().rutinas!=undefined){
                        setRutinas(doc.data().rutinas)
                    }
                }
        
            }
            catch (error) {
                //por el momento no sirve pero es por si  hay algun error
                console.log(error);
            }
            console.log("ACABE EL FETCH");
            
        }
        if(isLoaded==false){
            fetch();
            setLoaded(!isLoaded);

        }
    });
    return (
        <>
            <View>
                <ScrollView>
                    <SafeAreaView>
                        <View style={styles.rutina}>

                            {rutinas.map((listaRutina, index) => {
                                return (
                                    <Pressable onPress={() => navigate("Ejercicios",{data:listaRutina.Ejercicios})}>
                                        <View style={styles.card}>
                                            <View style={styles.rutinaCompleta} key={index}>
                                                <View style={styles.rutinaInfo}>
                                                    <Text style={styles.titulo}>{listaRutina.Nombre}</Text>
                                                    <Text style={styles.intense}>{listaRutina.Intensidad}</Text>
                                                    <Text style={styles.date}>{listaRutina.Fecha}</Text>
                                                </View>
                                                <Entypo name="dots-three-vertical" size={24} color="black" onPress={() => Alert.alert('Eliminar rutina')} />
                                            </View>
                                            {/* <View style={styles.divider}/> */}
                                        </View>
                                    </Pressable>
                                )
                            })}
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.botonFlot} onPress={() => Alert.alert('Agregar rutina')}>
                <Entypo name="plus" size={36} color="#023047" />
            </TouchableOpacity>
        </>
    );
}


const styles = StyleSheet.create({
    containerSafe: {
        backgroundColor: '#8ECAE6',
    },
    header: {
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#8ECAE6',
        padding: 10
    },
    image: {
        width: 60,
        height: 60,
    },
    text: {
        fontSize: 16,
        color: "white",
        flex: 1.7,
        textAlign: "center"
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    intense: {
        fontSize: 16
    },
    date: {
        fontSize: 12,
        opacity: 0.6
    },
    rutina: {
        margin: 20
    },
    card: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16
    },
    rutinaCompleta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    rutinaInfo: {
        flex: 1,
        marginLeft: 12
    },
    divider: {
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        width: '95%',
        marginLeft: 12,
        marginBottom: 8,
    },
    botonFlot: {
        backgroundColor: '#8ECAE6',
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 45,
        right: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});