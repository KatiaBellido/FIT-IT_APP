import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView } from 'react-native';

export default class Signup extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../assets/LogoFIT_IT.png')}
                style={styles.image}
                />
                    <Text style={ styles.loginText}>
                    Bienvenido A FIT・IT Regístrate:
                    </Text>
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Nombre"
                    />
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    />
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Password"
                    />
                    <Button
                    title="Signup"
                    color="#219EBC"
                    onPress={() => Alert.alert('Listo! Ya estas Registrado (nota: directo de aquí te hagas el login no?)')}
                    />
                    <Button
                    title="Go back"
                    color="#219EBC"
                    onPress={() => Alert.alert('Regresa si quieres')}
                    />
            
            </SafeAreaView>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 50,
      paddingTop: 20,
      alignItems: 'center',
    },
    inputStyle: {
      width: "100%",
      margin: 15,
      padding: 15,
      alignSelf: "center",
      borderColor: "#696D7D",
      color: "#023047",
      borderBottomWidth: 1,
    },
    loginText: {
      color: "#023047",
      margin: 15,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    image:{
        margin: 16,
        padding: 20,
        width: 150, 
        height:150,
    },
  });
  