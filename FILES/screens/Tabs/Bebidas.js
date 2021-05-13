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
                <Thumbnail square source={{ uri: 'https://mejorconsalud.as.com/wp-content/uploads/2017/11/arandanos-yogur-500x281.jpg' }} />
              </Left>
              <Body>
                <Text>Licuado de arándanos y yogur</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://mejorconsalud.as.com/wp-content/uploads/2017/11/licuado-fresa-500x313.jpg' }} />
              </Left>
              <Body>
                <Text>Licuado de fresas, naranja y yogur</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://mejorconsalud.as.com/wp-content/uploads/2017/11/licuado-durazno-500x338.jpg' }} />
              </Left>
              <Body>
                <Text>Licuado de duraznos y leche de almendras</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.infobae.com/new-resizer/-Ix57FCBigR8hJBeDz4pdyMQkUg=/992x558/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/12/29163631/detox-plan.jpg' }} />
              </Left>
              <Body>
                <Text>Smoothie de frutas</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.infobae.com/new-resizer/Rr0GhDwlTXeGyxNiapkzVt8ZhB0=/992x661/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/01/29121900/Jugos-9.jpg' }} />
              </Left>
              <Body>
                <Text>Limonada de Frutos Rojos</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.infobae.com/new-resizer/LfRdK7dSeJlsjx86HLfuVmReyKQ=/992x661/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/01/29122047/Jugos-16.jpg' }} />
              </Left>
              <Body>
                <Text>Licuado Verde</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.infobae.com/new-resizer/kPoXC88ad3ojO9pLOgzuyseimwY=/992x558/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/07/24144217/iStock-537522498.jpg' }} />
              </Left>
              <Body>
                <Text>Licuado de banana y leche de Almendras</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/07/jugodemelonymenta.jpg' }} />
              </Left>
              <Body>
                <Text>Licuado de melón y menta</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/beneficios_del_jugo_de_papaya_2.jpg' }} />
              </Left>
              <Body>
                <Text>Licuado de papaya y avena</Text>
                <Text note numberOfLines={2}>Perfectas para Verano . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate("Full")}>
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
