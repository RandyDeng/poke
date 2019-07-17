import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, Button, TextInput } from 'react-native';

import styles from 'app/constants/Style'

class SignInScreen extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    authCode: '',
    user: {}
  }

  _signIn = async () => {
    const {
      username,
      password
    } = this.state
    const user = await Auth.signIn(username, password)
    this.setState({
      user
    })
    console.log('sign in successful!')
    this.props.navigation.navigate('App')
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
          <Text style={{fontSize: 30, padding: 10}}>Poke Sign In</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            placeholder="Enter Username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            style={{ height: 50, width: 250, borderColor: '#333', borderWidth: 0, borderBottomWidth: 1 }}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            placeholder="Enter Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            style={{ height: 50, width: 250, borderColor: '#333', borderWidth: 0, borderBottomWidth: 1 }}
          />
        </View>

        <View style={{paddingTop: 10, height: 50, width: 250}}>
          <Button
            title="Sign In"
            onPress={this._signIn} />
        </View>

        <View style={{
          flexDirection: 'row',
          paddingTop: 20,
          justifyContent: 'center',
          alignContent: 'space-between'
        }}>
          <Text>Don't have an account?  </Text>
          <Text
            style={{color: '#0645AD'}}
            onPress={() => this.props.navigation.navigate('SignUp')}>
              Sign Up
          </Text>
        </View>

      </View>
    );
  }
}


export default SignInScreen