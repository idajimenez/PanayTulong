import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListRowSubCat from '../component/ListRowSubCat';

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      jobs: [],
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,})
    }
  }

  componentWillMount() {
    let jobs = [];
    let data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      if (data[i].subCategory == this.props.item) {
        jobs.push(data[i]);
      }
    } 
    console.log('jobs', jobs)
    this.state = {
      isLoading: false,
      jobs: jobs,
      dataSource: this.state.dataSource.cloneWithRows(jobs)
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
        enableEmptySections={true}
        contentContainerStyle={{flex: 1, marginTop: 55, justifyContent: 'flex-start', alignItems: 'flex-start'}}/>
    );
  }

  _renderItem(item) {
    return (
      <ListRowSubCat item={item} onPress={this._onPress.bind(this)}/>
    );
  }

  _renderFooter() {
    if (this.state.isLoading) {
      return <ActivityIndicator color={'red'} style={{marginTop: 10}}/>
    }
  }

  _onPress(item) {
    Actions.profile({item: item})
  }
}