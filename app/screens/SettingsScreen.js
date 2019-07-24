import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Auth } from 'aws-amplify';
import {
  Button,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from 'app/constants/Style'

export default class SettingsScreen extends React.Component {

  

  static navigationOptions = {
    title: 'Settings',
  };

  componentDidMount() {
    Auth.currentAuthenticatedUser(user => this.setState({ user: user}));
  }

  _signOut = async () => {
    await Auth.currentAuthenticatedUser().then(user => user.signOut());
    this.props.navigation.navigate('SignIn')
  };

  render() {
    return (
      <ScrollView style={styles.scroll}>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
              <Button title="Sign Out" onPress={this._signOut} />
            </View>
          </View>
        </Touchable>
        
      </ScrollView>
    );
  }
}
