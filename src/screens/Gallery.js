
import React, { Component } from 'react';
import ImageList from './ImageLinks'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Title,Icon } from 'native-base';
export default class ListThumbnailExample extends Component {
  
  
  render() {
   
  const content = ImageList.map((img,index) =>{
    return <ListItem key={index} thumbnail>
    <Left>
      <Thumbnail square source={{ uri:img.imageUrl }} />
    </Left>
    <Body>
      <Text>Album # {index+1}</Text>
      <Text note numberOfLines={1}>{img.description}</Text>
    </Body>
    <Right>
      <Button onPress={()=>this.props.navigation.push('Pictures')} transparent>
        <Text>Show</Text>
      </Button>
    </Right>
  </ListItem>
  })
    return (
      <Container>
        <Header translucent>
        <Left>
            <Button onPress={()=>this.props.navigation.goBack()} transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Albums</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {content}
          </List>
        </Content>
      </Container>
    );
  }
}