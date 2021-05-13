import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Center, Body, Title, Right} from 'native-base';
import { StyleSheet, Text, View, Switch, Image, TouchableOpacity, Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Tab1 from './Tabs/platillos';
import Tab2 from './Tabs/Bebidas';
import Tab3 from './Tabs/Postres';

export default class TabsExample extends Component {
  render() {
    return (
      <>
        <Tabs>
          <Tab heading="Platillos">
            <Tab1 navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Bebidas">
            <Tab2 navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Postres">
            <Tab3 navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
      <TouchableOpacity style={styles.botonFlot} onPress={() => this.props.navigation.navigate("Aniadir")}>
        <Entypo name="plus" size={36} color="#023047" />
      </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
    botonFlot: {
      backgroundColor: '#8ECAE6',
      width: 55,
      height: 55,
      position: 'absolute',
      bottom: 45,
      right: 10,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center'
    }
});