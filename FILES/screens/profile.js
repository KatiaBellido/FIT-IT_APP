import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
// import { HeaderMenu } from "./HeaderMenu";
export default function Profile({ navigation }){
    const pressHandler=(string)=>{
        
        navigation.navigate(string);
    }
    
        return (
            <View style={styles.container}>
                {/* <HeaderMenu/> */}
                <SafeAreaView style={styles.containerSafe}>
                    
                    <View style={styles.datosX}>
                        <View style={styles.datosBox}>
                            <Image source={require('../assets/favicon.png')}
                            style={styles.image}
                            />
                            <View style={styles.datosX}>

                                <Text style={ styles.Title}>
                                    Katia Yareth Bellido López
                                </Text>
                                <Text style={ styles.Title}>
                                    A01023638@itesm.mx
                                </Text>

                            </View>
                        </View>
                    
                        <Text style={ styles.Title}>
                            20 años
                        </Text>
                        <Text style={ styles.Title}>
                            54 kg
                        </Text>
                        
                        <Text style={styles.Title}>
                            3 Rutinas
                        </Text>
                        <Text style={ styles.Title}>
                            Cardio
                        </Text>
                        <TouchableOpacity style={ styles.boton}
                            onPress={() => pressHandler("Stats")}>
                            <Text style={ styles.Title}>
                                Estadísticas
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:30}}>
                    <Button
                        title="Go back"
                        color="#219EBC"
                        onPress={() => alert("back")}
                    />
                    </View>
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
  
