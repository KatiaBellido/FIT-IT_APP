import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Switch, Image, TextInput, Alert, SafeAreaView, ActivityIndicator } from 'react-native';
import firebase from "../database/firebase";
export default class Login extends Component {
    // static navigationOptions={
    //   title:"First page",
    //   headerLeft:()=>null,
    // }
    constructor() {
        super();
        this.state = {
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
      userLogin = () => {
        this.props.navigation.navigate("Profile"); //ESTO SE COMENTA SI SE USARA LA FUNCION DE LOGIN

        //ESTO DE PUEDE DESCOMENTAR PARA VER QUE EL LOGIN FUNCIONA... ESTA COMENTADO PARA QUE NO TENGAS QUE LOGEARTE EN LAS PRUEBAS

        // if (this.state.email === "" && this.state.password === "") {
        //   Alert.alert("Enter details to signin!");
        // } else {
        //   this.setState({
        //     isLoading: true,
        //   });
        //   firebase
        //     .auth()
        //     .signInWithEmailAndPassword(this.state.email, this.state.password)
        //     .then((res) => {
        //       console.log(res);
    
        //       console.log("User logged-in successfully!");
        //       this.setState({
        //         isLoading: false,
        //         email: "",
        //         password: "",
        //       });
        //       this.props.navigation.navigate("Profile");
        //     })
        //     .catch((error) => {
        //       Alert.alert(error.message);
        //       this.setState({ errorMessage: error.message });
        //       this.setState({
        //         isLoading: false,
        //       });
        //     });
        // }
      };

      //AQUI TERMINA TODO EL LOGIN DE PRUEBA
    render() {
        const{navigate}=this.props.navigation;
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
                    Login FIT・IT
                    </Text>
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
                <View>
                    <Text style={ styles.signupText}>
                    Aún no te registras? Presiona SignUp 
                    </Text>
                    <View style={styles.fixToText}>
                        <Button
                        title="Login"
                        color="#219EBC"
                        onPress={() => this.userLogin()}
                        />
                        <Button
                        title="Signup"
                        color="#219EBC"
                        onPress={()=>this.props.navigation.navigate("SignUp")}
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
  