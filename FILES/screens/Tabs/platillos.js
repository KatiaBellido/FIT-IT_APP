import React, { Component,useState,useEffect } from 'react';
//import {Image, Text, SafeAreaView, ScrollView, Pressable, Alert, Button, TouchableOpacity} from 'native-base';
import { View, StyleSheet, Image, Text, SafeAreaView, ScrollView, Pressable, Alert, Button, TouchableOpacity } from 'react-native';
import firebase from '../../database/firebase';
import { Entypo } from '@expo/vector-icons';
import { Thumbnail } from 'native-base';
export default function Platillos ({ navigation: { navigate} } ) {
  const [user, setUser] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const [recetas, setRecetas] = useState([{ categoria: "NULL", imagen: "NULL", nombre: "NULL" }]);
    const db = firebase.firestore().collection("Recetas");
    useEffect(() => {
        const fetch= async()=> {
            try {
               //const dbRef = db.doc(firebase.auth().currentUser.uid);
                const docs = await db.where("categoria","==","PLATILLOS").get();
                let allRecteas=[];
                docs.forEach((doc)=>{
                  allRecteas.push(doc.data())
                });
                setRecetas(allRecteas);
        
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
    }),[setRecetas];
    //console.log(recetas);


    return (
      <ScrollView>
                    <SafeAreaView>
                    
                        <View style={styles.rutina}>
                            {recetas.map((listaRecetas, index) => {
                                return (
                                    <Pressable onPress={() => navigate("Full",{data:listaRecetas})}>
                                        <View style={styles.card}>
                                            <View style={styles.rutinaCompleta} key={index}>
                                                <View style={styles.rutinaInfo}>
                                                
                                                    <Thumbnail square source={{uri:listaRecetas.imagen}}/>
              
                                                    <Text style={styles.titulo}>{listaRecetas.nombre}</Text>
                                                    
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
        fontSize: 15,
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