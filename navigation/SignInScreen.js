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

  _toSignUp = async () => {
    console.log(this.props.navigation.navigate('Signup'));
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        paddingTop: 150
      }}>
        <View style={{
          alignItems: 'center'
        }}>
          <Text style={{fontSize: 30, paddingBottom: 10}}>Poke Sign In</Text>
          <TextInput
            placeholder="Username"
            style={{ paddingLeft: 5, height: 40, width: 250, borderColor: '#333', borderWidth: 1 }}
          />
          <TextInput
            placeholder="Password"
            style={{ paddingLeft: 5, height: 40, width: 250, borderColor: '#333', borderWidth: 1 }}
          />
        </View>

        <View style={{
          paddingTop: 15,
          justifyContent: 'center',
          alignContent: 'space-between'
        }}>
          <Button
            title="Sign In"
            style={{ width: 100, borderColor: '#333', borderWidth: 1 }}
            onPress={this.handleSend} />
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