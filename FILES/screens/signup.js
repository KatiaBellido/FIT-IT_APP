import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import firebase from "../database/firebase";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      edad: "",
      isLoading: false,
    };
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Inserte todos los datos!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log("Registrado con éxito!");
          this.setState({
            isLoading: false,
            displayName: this.state.displayName,
            email: this.state.email,
            edad: this.state.edad,
            password: "",
          });
          const dbh = firebase.firestore();

              dbh.collection("users").doc(firebase.auth().currentUser.uid).set({
                email: this.state.email,
                name: this.state.displayName,
                edad: this.state.edad,

          })

          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          Alert.alert("Inserte todos los datos!");
          this.setState({ errorMessage: error.message });
          this.setState({
            isLoading: false,
          });
        });
    }
  };
    render() {
      if (this.state.isLoading) {
        return (
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E" />
          </View>
        );
      }
        return (
              
            <ScrollView>
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
                    value={this.state.displayName}
                    onChangeText={(val) => this.updateInputVal(val, "displayName")}
                    />
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="edad"
                    keyboardType = 'numeric'
                    onChangeText={(val) => this.updateInputVal(val, "edad")}
                    value={this.state.edad}
                    maxLength={2}
                    />
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, "email")}
                    />
                       <Text style={ styles.signupText}>
                    Contraseña con una mayúscula y minimo 6 caracteres 
                    </Text>
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputVal(val, "password")}
                    maxLength={15}
                    secureTextEntry={true}
                    />
                    
                    <Button
                    title="Signup"
                    color="#219EBC"
                    onPress={() => this.registerUser()}                    
                    />
            
            </SafeAreaView>
                  </ScrollView>
            
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
        width: 100, 
        height:100,
    },
  });
  