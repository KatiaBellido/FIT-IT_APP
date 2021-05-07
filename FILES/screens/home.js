import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Home(){
    return(
        <View style={StyleSheet.container}>
            <Text>HOME SCREEN</Text>
        </View>
    )
}
const syles =StyleSheet.create({
    container:{
        padding:24
    }
});