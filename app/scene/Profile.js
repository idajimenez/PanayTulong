import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ListView,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const SCREEN = Dimensions.get('window');

export default class Jobs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;
    return (
      <View style={{flex: 1, marginTop: 55}}>
        <Image source={{uri: item.image}} style={{width: SCREEN.width * 0.7, height: SCREEN.width * 0.7, marginRight: 10}}/>
        <Text>{item.jobCategory}</Text>
        <Text>{item.subCategory}</Text>
        <Text>{item.desciption}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  }
}