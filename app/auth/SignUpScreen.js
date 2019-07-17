import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, Button, TextInput } from 'react-native';

import styles from 'app/constants/Style'

class SignUpScreen extends React.Component {
    state = {
      username: '',
      password: '',
      email: '',
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
      console.log('User signed up successfully!')
      this.props.navigation.navigate('ConfirmSignUp', {'username': this.state.username})
    }
  
    render() {
        return (
          <View style={{
            flex: 1,
            flexDirection: 'column',
            paddingTop: 120,
            alignItems: 'center'
          }}>
            <View style={{
              alignItems: 'center'
            }}>
              <View style={styles.container}>
                <Text style={{fontSize: 30, padding: 10}}>Poke Sign Up</Text>
              </View>

              <View style={styles.container}>
                <TextInput
                  placeholder="Enter Email"
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                  style={{ height: 50, width: 250, borderColor: '#333', borderWidth: 0, borderBottomWidth: 1 }}
                />
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
            </View>

            <View style={{paddingTop: 10, height: 50, width: 250}}>
              <Button
                title="Register Account"
                onPress={this._signUp} />
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