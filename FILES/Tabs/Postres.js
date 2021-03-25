import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.pinimg.com/originals/c9/32/d1/c932d10ca399d13a2f43b60049ba703c.png' }} />
              </Left>
              <Body>
                <Text>Manzanas Rellenas</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/recetas-de-postres-saludables-con-avena-navidenos.jpg' }} />
              </Left>
              <Body>
                <Text>Mouse de Chocolate</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.doradagostino.com/wp-content/uploads/2020/09/POSTRES-SALUDABLES-CON-BERRIES-min.jpg' }} />
              </Left>
              <Body>
                <Text>Taquitos de Fresa</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://cde.3.elcomercio.pe/ima/0/1/7/1/9/1719777.jpg' }} />
              </Left>
              <Body>
                <Text>Mouse de Frutas</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.clara.es/medio/2018/12/13/postres-saludables-flan-de-manzana_260a6866_1000x1000.jpg' }} />
              </Left>
              <Body>
                <Text>Flan bajo en grasa</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxlkbRt5nmAt8dYOJHNYFGzl3lwAfpK0JWw&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Brochetas de Fruta</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.ecestaticos.com/image/clipping/c0598fd3cea5eb7003700a1a66884d0c/tres-postres-saludables-para-que-no-tengas-que-renunciar-al-chocolate-en-tu-dieta.jpg' }} />
              </Left>
              <Body>
                <Text>Galletas de Avena</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://tabathapasteleria.com/wp-content/uploads/2020/01/postres-saludables.png' }} />
              </Left>
              <Body>
                <Text>Brounie de Chocolate bajo en grasa</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/02/recetas-de-postres-saludables-sin-azucar-con-chia.jpg' }} />
              </Left>
              <Body>
                <Text>Galletas de Avena con Chispas de Chocolate</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
