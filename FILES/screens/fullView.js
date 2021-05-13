import React, { Component } from 'react';
import {Dimensions, StyleSheet, Modal, Share, View, Text, Switch, SafeAreaView, Alert, Image, StatusBar, ImageBackground, ScrollView} from 'react-native';
import {Container, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export default class FullView extends Component{

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                <StatusBar barStyle="light-content" />
                <ImageBackground source = {require('../assets/mugcake.jpeg')} style={styles.recetaFondo}>
                    <SafeAreaView>
                        <View style={styles.menubar}>
                            <View style={styles.back}>
                                <AntDesign name="heart" size={24} color="#fff" style={styles.heart} onPress={() => Alert.alert('Me gusta')}/>
                                <AntDesign name="sharealt" size={24} color="#fff" style={styles.share} onPress={() => Alert.alert('Compartir')}/>
                            </View>
                        </View>
                        <View style={styles.mainReceta}>
                            <Text style={styles.titulos}> Título del Platillo </Text>
                            <View style={styles.divider}/>
                            <Text style={styles.sub}> Calorias por receta </Text>
                            <Text style={styles.sub}> Grasa, Proteina, Carbs</Text>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
                <View style={styles.contenedorReceta}>
                    <Text style={styles.bold}> Ingredientes </Text>
                    <Text> 4 cda. harina de repostería </Text>
                    <Text> 4 cda. azúcar blanco </Text>
                    <Text> 2 cda. cacao en polvo </Text>
                    <Text> 1 huevo mediano </Text>
                    <Text> 3 cda. leche entera </Text>
                    <Text> 1/3 cdta levadura  </Text>
                    <View style={styles.instrucciones}>
                        <Text style={styles.bold}> Instrucciones </Text>
                        <Text style={styles.paso}> 1. En un pequeño recipiente echamos las cucharadas rasas de harina, 
                            ayudándonos para ello de un cuchillo, y dejamos que el contenido de harina sea simplemente el 
                            que entra en la cavidad de la cuchara. Añadimos las cucharadas de azúcar, el cacao en polvo y 
                            la levadura.</Text>
                        <Text style={styles.paso}> 2. Revolvemos todo con la ayuda de un tenedor, hasta que los ingredientes están 
                            completamente mezclados.</Text>
                        <Text style={styles.paso}> 3. Batimos el huevo hasta que presenta burbujas, así el resultado es más esponjoso. 
                            Mezclamos con los ingredientes en polvo que tenemos en el bol.</Text>
                        <Text style={styles.paso}> 4. A continuación añadimos la leche y el aceite. 
                            Unimos todo con el tenedor de forma concienzuda hasta conseguir una mezcla completamente homogénea.</Text>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        color: 'black'
    },
    recetaFondo: {
        width: '100%'
    },
    menubar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    heart: {
        marginRight: 4
    },
    share: {
        marginLeft: 4
    },
    mainReceta: {
        paddingTop: 0,
        paddingRight: 32,
        marginTop: 200,
        marginBottom: 32
    },
    titulos: {
        fontSize: 32,
        color: 'black',
        fontWeight: "900"
    },
    bold: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8
    },
    sub: {
        marginLeft: 8
    },
    divider: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        width: 150,
        marginTop: 8,
        marginLeft: 12,
        marginBottom: 8
    },
    contenedorReceta: {
        marginTop: -20,
        padding: 16,
        backgroundColor: 'white',
    },
    instrucciones: {
        alignContent: 'space-around',
        marginTop: 16,
    },
    paso: {
        marginTop: 8,
        textAlign: 'justify'
    }
});