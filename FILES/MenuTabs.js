import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Center, Body, Title, Right } from 'native-base';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';
import { HeaderMenu } from "./HeaderMenu";
import Tab1 from './Tabs/Platillos';
import Tab2 from './Tabs/Bebidas';
import Tab3 from './Tabs/Postres';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        
        <Header>
          <Body>
            <HeaderMenu />
          </Body>
        </Header>

        <Tabs>
          <Tab heading="Platillos">
            <Tab1 />
          </Tab>
          <Tab heading="Bebidas">
            <Tab2 />
          </Tab>
          <Tab heading="Postres">
            <Tab3 />
          </Tab>
        </Tabs>

      </Container>

    );
  }
}
