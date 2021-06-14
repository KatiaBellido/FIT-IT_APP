// import React, { Component } from 'react';
// import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import React, { Component,useState,useEffect } from 'react';
//import {Image, Text, SafeAreaView, ScrollView, Pressable, Alert, Button, TouchableOpacity} from 'native-base';
import { View, StyleSheet, Image, Text, SafeAreaView, ScrollView, Pressable, Alert, Button, TouchableOpacity } from 'react-native';
import firebase from '../../database/firebase';
import { Entypo } from '@expo/vector-icons';
import { Thumbnail } from 'native-base';

export default function ListThumbnailExample ({ navigation: { navigate } } ) {

  const [user, setUser] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [recetas, setRecetas] = useState([{ categoria: "NULL", imagen: "NULL", nombre: "NULL" }]);
  const db = firebase.firestore().collection("Recetas");
  useEffect(() => {
      const fetch= async()=> {
          try {
             //const dbRef = db.doc(firebase.auth().currentUser.uid);
              const docs = await db.where("categoria","==","POSTRES").get();
              let allRecteas=[];
              docs.forEach((doc)=>{
                allRecteas.push(doc.data())
              });
              setRecetas(allRecteas);
      
          }
          catch (error) {
              //por el momento no sirve pero es por si  hay algun error
              console.log(error);
          }
          console.log("ACABE EL FETCH");
          
      }
      if(isLoaded==false){
          fetch();
          setLoaded(!isLoaded);
          

      }
  });
  //console.log(recetas);

    return (
      <ScrollView>
      <SafeAreaView>
      
          <View style={styles.rutina}>
              {recetas.map((listaRecetas, index) => {
                  return (
                      <Pressable onPress={() => navigate("Full",{data:listaRecetas})}>
                          <View style={styles.card}>
                              <View style={styles.rutinaCompleta} key={index}>
                                  <View style={styles.rutinaInfo}>
                                  
  <Thumbnail square source={{uri:listaRecetas.imagen}}/>

                                      <Text style={styles.titulo}>{listaRecetas.nombre}</Text>
                                      
                                  </View>
                                  <Entypo name="dots-three-vertical" size={24} color="black" onPress={() => Alert.alert('Eliminar rutina')} />
                              </View>
                              {/* <View style={styles.divider}/> */}
                          </View>
                      </Pressable>
                  )
              })}
</View>
</SafeAreaView>
</ScrollView>

);
}
      // <Container>
      //   <Content>
      //     <List>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://i.pinimg.com/originals/c9/32/d1/c932d10ca399d13a2f43b60049ba703c.png' }} />
      //         </Left>
      //         <Body>
      //           <Text>Manzanas Rellenas</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/recetas-de-postres-saludables-con-avena-navidenos.jpg' }} />
      //         </Left>
      //         <Body>
      //           <Text>Mouse de Chocolate</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://www.doradagostino.com/wp-content/uploads/2020/09/POSTRES-SALUDABLES-CON-BERRIES-min.jpg' }} />
      //         </Left>
      //         <Body>
      //           <Text>Taquitos de Fresa</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://cde.3.elcomercio.pe/ima/0/1/7/1/9/1719777.jpg' }} />
      //         </Left>
      //         <Body>
      //           <Text>Mouse de Frutas</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://www.clara.es/medio/2018/12/13/postres-saludables-flan-de-manzana_260a6866_1000x1000.jpg' }} />
      //         </Left>
      //         <Body>
      //           <Text>Flan bajo en grasa</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxlkbRt5nmAt8dYOJHNYFGzl3lwAfpK0JWw&usqp=CAU' }} />
      //         </Left>
      //         <Body>
      //           <Text>Brochetas de Fruta</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://www.ecestaticos.com/image/clipping/c0598fd3cea5eb7003700a1a66884d0c/tres-postres-saludables-para-que-no-tengas-que-renunciar-al-chocolate-en-tu-dieta.jpg' }} />
      //         </Left>
      //         <Body>
      //           <Text>Galletas de Avena</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://tabathapasteleria.com/wp-content/uploads/2020/01/postres-saludables.png' }} />
      //         </Left>
      //         <Body>
      //           <Text>Brounie de Chocolate bajo en grasa</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //       <ListItem thumbnail>
      //         <Left>
      //           <Thumbnail square source={{ uri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/02/recetas-de-postres-saludables-sin-azucar-con-chia.jpg' }} />
      //         </Left>
      //         <Body>
      //           <Text>Galletas de Avena con Chispas de Chocolate</Text>
      //           <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
      //         </Body>
      //         <Right>
      //           <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
      //             <Text>View</Text>
      //           </Button>
      //         </Right>
      //       </ListItem>
      //     </List>
      //   </Content>
      // </Container>
      const styles = StyleSheet.create({
        containerSafe: {
            backgroundColor: '#8ECAE6',
        },
        header: {
            marginTop: 50,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: '#8ECAE6',
            padding: 10
        },
        image: {
            width: 60,
            height: 60,
        },
        text: {
            fontSize: 16,
            color: "white",
            flex: 1.7,
            textAlign: "center"
        },
        titulo: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        intense: {
            fontSize: 16
        },
        date: {
            fontSize: 12,
            opacity: 0.6
        },
        rutina: {
            margin: 20
        },
        card: {
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 16
        },
        rutinaCompleta: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16
        },
        rutinaInfo: {
            flex: 1,
            marginLeft: 12
        },
        divider: {
            borderBottomColor: '#808080',
            borderBottomWidth: 1,
            width: '95%',
            marginLeft: 12,
            marginBottom: 8,
        },
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
      } );
