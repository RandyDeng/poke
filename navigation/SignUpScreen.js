import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';


class SignUpScreen extends React.Component {
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
              <Text style={{fontSize: 30, paddingBottom: 10}}>Poke Sign Up</Text>
              <TextInput
                placeholder="  Email"
                style={{ height: 40, width: 250, borderColor: '#333', borderWidth: 1 }}
              />
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
              paddingTop: 15,
              justifyContent: 'center',
              alignContent: 'space-between'
            }}>
              <Button
                title="Sign Up"
                style={{ width: 100, borderColor: '#333', borderWidth: 1 }}
                onPress={this.handleSend} />
            </View>
    
            <View style={{
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'center',
              alignContent: 'space-between'
            }}>
              <Text>Already have an account?  </Text>
              <Text
                style={{color: '#0645AD'}}
                onPress={() => this.props.navigation.navigate('SignIn')}>
                  Sign In
              </Text>
            </View>
          </View>
        );
      }
}


export default SignUpScreen