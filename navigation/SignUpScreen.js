import React from 'react';
import { Auth } from 'aws-amplify';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';


class SignUpScreen extends React.Component {
    state = {
      username: '',
      password: '',
      email: '',
      authCode: '',
      user: {}
    }

    _signUp = async () => {
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

    _print = async () => {
      console.log(this.state);
      console.log(this.state.username)
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
                placeholder="Email"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                style={{ paddingLeft: 5, height: 40, width: 250, borderColor: '#333', borderWidth: 1 }}
              />
              <TextInput
                placeholder="Username"
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                style={{ paddingLeft: 5, height: 40, width: 250, borderColor: '#333', borderWidth: 1 }}
              />
              <TextInput
                placeholder="Password"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                style={{ paddingLeft: 5, height: 40, width: 250, borderColor: '#333', borderWidth: 1 }}
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
                onPress={this._signUp} />
              <Button
                title="Print to Console"
                style={{ width: 100, borderColor: '#333', borderWidth: 1 }}
                onPress={this._print} />
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