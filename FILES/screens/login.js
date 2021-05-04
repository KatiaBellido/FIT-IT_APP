import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../assets/LogoFIT_IT.png')}
                style={styles.image}
                />
                    <Text style={ styles.loginText}>
                    Login FIT・IT
                    </Text>
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    />
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Password"
                    />
                <View>
                    <Text style={ styles.signupText}>
                    Aún no te registras? Presiona SignUp 
                    </Text>
                    <View style={styles.fixToText}>
                        <Button
                        title="Login"
                        color="#219EBC"
                        onPress={() => Alert.alert('Login pressed')}
                        />
                        <Button
                        title="Signup"
                        color="#219EBC"
                        onPress={() => Alert.alert('Signup pressed')}
                        />
                        
                    </View>
                </View>
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
    signupText: {
        color: "#696D7D",
        margin: 10,
        fontSize: 10,
        textAlign: "center",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image:{
        margin: 16,
        padding: 20,
        width: 150, 
        height:150,
    },
  });
  