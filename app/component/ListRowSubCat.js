import React from 'react';
import { 
  Image,
  View, 
  Text, 
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux'
const SCREEN = Dimensions.get('window');

const ListRow = (props) => {
  let {item, onPress} = props;
  return (
    <TouchableOpacity style={styles.menuContainer} onPress={() => onPress(item)}>
      {(item._key) ?
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', height: 65}}>
          <Image source={{uri: item.image}} style={{width: 60, height: 60, marginRight: 10}}/>
          <View>
            <Text style={{textAlign: 'center'}}>{item.name}</Text>
            <Text style={{textAlign: 'center'}}>₱ {item.price}</Text>
          </View>
        </View>
        : <Text style={{textAlign: 'center'}}>{item}</Text>
      }
    </TouchableOpacity>    
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    width: SCREEN.width - 10, 
    justifyContent: 'center', 
    // alignItems: 'center', 
    backgroundColor: '#939598', 
    margin: 5,
    padding: 10
  }
})

export default ListRow;