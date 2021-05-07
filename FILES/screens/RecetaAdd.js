import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderMenu } from "./HeaderMenu";

export default class RecetasAdd extends Component{
    render(){
        return(
            <SafeAreaView>
                <HeaderMenu/>
                <View style={styles.container}>
                    <Text style={styles.titulos}>Agregar nueva receta</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50,
        paddingTop: 20,
        alignItems: 'center',
    },
    titulos: {
        fontSize: 20,
        color: 'black',
        fontWeight: "600"
    }
});