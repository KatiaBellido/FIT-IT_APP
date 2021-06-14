import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import firebase from '../database/firebase';
import { Fontisto } from '@expo/vector-icons'; 

import { HeaderMenu } from "./HeaderMenu";
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
const db=firebase.firestore().collection("users");

async function getData() {
    try {
        const dbRef = db.doc(firebase.auth().currentUser.uid);
        const doc = await dbRef.get();
        if (!doc.exists) {
            console.log('No such document!');
          } else {
            return doc.data();
          }
        
    }
    catch (error) {
        //por el momento no sirve pero es por si  hay algun error
        objeto = Object.create(Object.prototype, {
            name: {value:"error - offline"},
            email: {value:"error - offline"},
            edad: {value:"error - offline"}
        })
        console.log(error);
    }
}

export default function Profile({ navigation: { navigate } } ) {

    const [user, setUser] = useState({});

    
    getData().then(data => {
        setUser(data);
    });

    
      signOut = () => {
        firebase.auth().signOut().then(() => {
          navigate('Login')
        })
        .catch(error => Alert(error.message ))
      } 
      
                
        return (
            <View style={styles.container}>
                {/* <HeaderMenu/> */}
                <SafeAreaView style={styles.containerSafe}>
                    
                    <View style={styles.datosX}>
                        <View style={styles.datosBox}>
                            <Fontisto name="user-secret" size={60} color="black"/>
                            <View style={styles.datosX}>
                                <Text style={ styles.Title}>
                                {user.name}
                                </Text>
                                <Text style={ styles.Title}>
                                {user.edad}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.Title}>
                            {user.email}
                        </Text>
                        <Text style={styles.Title}>
                            3 Rutinas
                        </Text>
                        <Text style={ styles.Title}>
                            Cardio
                        </Text>
                        <TouchableOpacity style={ styles.boton}
                            onPress={() => navigate("Stats")}>
                            <Text style={ styles.Title}>
                                Estadísticas
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:30}}>
                    </View>
                    <Button
                    color="#3740FE"
                    title="Cerrar Sesión"
                    onPress={() => signOut()}
                    />
                </SafeAreaView>
            </View>
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(105,109,125, 0.1)",
    },
    containerSafe: {
      flex: 1,
      marginHorizontal: 16,
      paddingTop: 20,
    },
    datosBox: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 20,
    },
    datosX: {
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "stretch",
    }
    ,
    image:{
        margin: 16,
        padding: 20,
        width: 80, 
        height:80,
    },
    Title: {
        padding: 10,
        fontSize: 16,
        color: "#023047",
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "#8ECAE6",
        textAlign: "left",
        
    },
    boton: {
        alignItems: "center",
        borderRadius: 10,
        marginTop:10,
        padding: 10,
        backgroundColor: "#8ECAE6",
    }
  });
  
