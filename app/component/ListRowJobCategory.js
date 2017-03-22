import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Entypo';
const SCREEN = Dimensions.get('window');

const ListRow = ({item, onPress}) => 
    <TouchableOpacity style={styles.menuContainer} onPress={() => onPress(item)}>
      <Icon name='chat' style={{fontSize: 20, paddingBottom: 5, flex: 1}} />
      <Text style={{textAlign: 'center'}}>{item}</Text>
    </TouchableOpacity>

const styles = StyleSheet.create({
  menuContainer: {
    width: SCREEN.width / 2.2, 
    height: SCREEN.width / 2.2, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#939598', 
    margin: 5
  }
})

export default ListRow;