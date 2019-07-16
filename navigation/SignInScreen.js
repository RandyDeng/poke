import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

class SignInScreen extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    authCode: '',
    user: {}
  }

  async signUp() {
    const {
      username,
      password,
      email
    } = this.state
    await Auth.signUp({
      username,
      password,
      attributes: {
        email
      }
    })
    console.log('sign up successful!')
  }

  async confirmSignUp() {
    const {
      username,
      authCode
    } = this.state
    await Auth.configSignignUp(username, authCode)
    console.log('confirm sign up successful!')
  }

  async signIn() {
    const {
      username,
      password
    } = this.state
    const user = await Auth.signIn(username, password)
    this.setState({
      user
    })
    console.log('sign in successful!')
  }

  async confirmSignIn() {
    const {
      user,
      authCode
    } = this.state
    await Auth.configSignignIn(user, authCode)
    console.log('user now successfully signed in to the app!!')
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        paddingTop: 100
      }}>
        <View style={{
          alignItems: 'center'
        }}>
          <Text style={{fontSize: 30}}>Poke</Text>
          <TextInput
            placeholder="  Username"
            style={{ height: 40, width: 250, borderColor: '#333', borderWidth: 1 }}
          />
          <TextInput
            placeholder="  Password"
            style={{ height: 40, width: 250, borderColor: '#333', borderWidth: 1 }}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          paddingTop: 15,
          justifyContent: 'center',
          alignContent: 'space-between'
        }}>
          <Button
            title="Sign In"
            style={{ borderColor: '#333', borderWidth: 1 }}
            onPress={this.handleSend} />
          <Button
            title="Sign Up"
            style={{ borderColor: '#333', borderWidth: 1 }}
            onPress={this.handleSend} />
        </View>
      </View>
    );
  }
}

export default SignInScreen