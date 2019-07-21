import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

import styles from 'app/constants/Style'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <View style={styles.container}>
          <Text style={{fontSize: 30, padding: 10}}>Welcome. Start Poking!</Text>
        </View>

        <View style={{height: 50, width: 250}}>
          <Button
            title="Poke your friends!"
            onPress={() => {this.props.navigation.navigate('PokeScreen')}} />
        </View>

      </View>
    );
  }
}
