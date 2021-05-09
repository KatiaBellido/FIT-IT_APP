import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, ActivityIndicator } from 'react-native';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
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
      Alert.alert("Enter details to signup!");
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
          console.log("User registered successfully!");
          this.setState({
            isLoading: false,
            displayName: this.state.displayName,
            email: this.state.email,
            password: "",
          });
          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          Alert.alert("Enter details to signup!");
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
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, "email")}
                    />
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
  