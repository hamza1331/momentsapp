import Expo from 'expo';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  Dimensions
} from 'react-native';

import ImageGallery, { openImageGallery } from '@expo/react-native-image-gallery';
import {  Header, Left, Body, Right, Button,Title,Icon } from 'native-base';
class ListItem extends React.Component {
  _openInImageGallery = () => {
    let { item } = this.props;

    this._view.measure((rx, ry, w, h, x, y) => {
      openImageGallery({
        animationMeasurements: {w, h, x, y},
        list,
        item,
      });
    });
  };

  render() {
    let { list, item } = this.props;

    let { width, height } = item;

    let targetWidth = Dimensions.get('screen').width*0.9;
    let multiplier = targetWidth / width;
    let targetHeight = multiplier * height;

    return (
      <TouchableWithoutFeedback onPress={this._openInImageGallery}>
        <Image
          ref={view => { this._view = view }}
          source={{uri: item.imageUrl}}
          style={{width: targetWidth, height: targetHeight, marginBottom: 20}} />
      </TouchableWithoutFeedback>
    );
  }

}

class FakeContent extends React.Component {
  render() {
    return (
      <View style={{flex: 1, paddingBottom: Platform.OS === 'android' ? 10 : 0}}>
        <Header translucent>
        <Left>
            <Button onPress={()=>this.props.navigation.goBack()} transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>My Album</Title>
          </Body>
          <Right />
        </Header>

        <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center', paddingTop: 20}}>
          {list.map(item => <ListItem key={item.imageUrl} item={item} />)}
        </ScrollView>
      </View>
    );
  }
}

export default class Pictures extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <FakeContent navigation = {this.props.navigation} />
        </View>

        <ImageGallery />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const list = [
  {
    description: ':O hat etc',
    imageUrl: 'https://images.freeimages.com/images/large-previews/e6b/yellow-beetle-1366999.jpg',
    width: 480,
    height: 480,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/d1f/balloon-contest-1417733.jpg',
    description: 'wood',
    width: 640,
    height: 640,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/4dc/street-1366583.jpg',
    description: 'making beer etc',
    width: 640,
    height: 640,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/ed3/a-stormy-paradise-1-1563744.jpg',
    description: 'making beer etc',
    width: 640,
    height: 640,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
    description: 'making beer etc',
    width: 640,
    height: 640,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/859/burning-trees-1391193.jpg',
    description: 'making beer etc',
    width: 640,
    height: 640,
  },
];