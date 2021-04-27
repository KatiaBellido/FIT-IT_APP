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
                <Thumbnail square source={{ uri: 'https://i.blogs.es/4b87cf/garbanzos/1366_2000.jpg' }} />
              </Left>
              <Body>
                <Text>Garbanzos tostados al pimentón</Text>
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
                <Thumbnail square source={{ uri: 'https://i.blogs.es/ef6f25/albondigas/1366_2000.jpg' }} />
              </Left>
              <Body>
                <Text>Tortitas de calabaza y avena</Text>
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
                <Thumbnail square source={{ uri: 'https://i.blogs.es/a0fd80/tortilla/1366_2000.jpg' }} />
              </Left>
              <Body>
                <Text>Tortilla de claras con berenjena</Text>
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
                <Thumbnail square source={{ uri: 'https://i0.wp.com/chingaledarling.com/wp-content/uploads/2019/06/Captura-de-pantalla-2019-06-22-a-las-1.45.14-p.m..png?w=592&ssl=1' }} />
              </Left>
              <Body>
                <Text>Tacos de Pollo</Text>
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
                <Thumbnail square source={{ uri: 'https://i0.wp.com/chingaledarling.com/wp-content/uploads/2019/06/Captura-de-pantalla-2019-06-22-a-las-1.47.04-p.m..png?w=556&ssl=1' }} />
              </Left>
              <Body>
                <Text>Chilaquiles Fit</Text>
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
                <Thumbnail square source={{ uri: 'https://i2.wp.com/chingaledarling.com/wp-content/uploads/2019/06/Captura-de-pantalla-2019-06-22-a-las-1.51.04-p.m..png?w=589&ssl=1' }} />
              </Left>
              <Body>
                <Text>Chiles Rellenos Fit</Text>
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
                <Thumbnail square source={{ uri: 'https://i.blogs.es/da59e0/1366_2000-7-/1366_2000.jpg' }} />
              </Left>
              <Body>
                <Text>Hummus con verduras</Text>
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
                <Thumbnail square source={{ uri: 'https://i.blogs.es/05870c/2560_3000-2-/1366_2000.jpg' }} />
              </Left>
              <Body>
                <Text>Ensalada de garbanzos al balsámico</Text>
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
                <Thumbnail square source={{ uri: 'https://i.blogs.es/6e8694/ensalada_lentejas_rec/1366_2000.jpg' }} />
              </Left>
              <Body>
                <Text>Ensalada de lentejas</Text>
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
