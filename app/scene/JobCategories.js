import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  View,
  Text
} from 'react-native';
import _ from 'underscore';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import ListRowJobCategory from '../component/ListRowJobCategory';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBj1BNVdrXX_uIRBfzs_ejLV_-DksvQqlU",
  authDomain: "trim-anvil-149208.firebaseapp.com",
  databaseURL: "https://trim-anvil-149208.firebaseio.com",
  storageBucket: ""
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class JobCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,})
    }
    this.itemsRef = this.getRef().child('Gibsinator-ElaPachato-loco').child('posts'); // 'Bbing-essse-lachika'
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        let value = child.val();
        items.push({
          _key: child.key,
          jobCategory: value.jobCategories,
          subCategory: value.subCategories,
          desciption: value.desc,
          image: value.image,
          price: value.price
        });
      });

      this.setState({
        isLoading: false,
        data: items,
        dataSource: this.state.dataSource.cloneWithRows(_.uniq(_.pluck(items, 'jobCategory')))
      });

    });
  }

  getUniqueValuesOfKey(array, key){
    return array.reduce(function(carry, item){
      if(item[key] && !~carry.indexOf(item[key])) carry.push(item[key]);
      return carry;
    }, []);
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
        enableEmptySections={true}
        contentContainerStyle={{marginTop: 55, flexDirection: 'row', flexWrap: 'wrap', flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}/>
    );
  }

  _renderItem(item) {
    return (
      <ListRowJobCategory item={item} onPress={this._onPress.bind(this)}/>
    );
  }

  _renderFooter() {
    if (this.state.isLoading) {
      return <ActivityIndicator color={'red'} style={{marginTop: 10}}/>
    }
  }

  _onPress(item) {
    Actions.subCat({item: item, data: this.state.data})
  }
}