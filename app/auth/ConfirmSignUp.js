import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, Button, TextInput } from 'react-native';

import styles from 'app/constants/Style'

class ConfirmSignUp extends React.Component {
  state = {
    username: this.props.navigation.state.params.username,
    authCode: '',
    user: {}
  }

  _confirmSignUp = async () => {
    const {
      username,
      authCode
    } = this.state
    await Auth.confirmSignUp(username, authCode)
    console.log('confirm sign up successful!')
    this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        paddingTop: 120,
        alignItems: 'center'
      }}>
        <View style={styles.container}>
          <Text style={{fontSize: 30, padding: 10}}>Poke Email Verification</Text>
        </View>

        <View style={styles.container}>
          <Text style={{fontSize: 12, padding: 10}}>Please check your email and enter the verification code</Text>
        </View>

        <View style={styles.container}>
        <TextInput
            placeholder="Enter Verification Code"
            onChangeText={(authCode) => this.setState({authCode})}
            value={this.state.authCode}
            style={{ height: 50, width: 250, borderColor: '#333', borderWidth: 0, borderBottomWidth: 1 }}
        />
        </View>

        <View style={{paddingTop: 10, height: 50, width: 250}}>
          <Button
            title="Confirm Code"
            onPress={this._confirmSignUp} />
        </View>

      </View>
    );
  }
}


export default ConfirmSignUp