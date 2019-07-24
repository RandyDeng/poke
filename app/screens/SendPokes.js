import React from 'react';
import { API } from 'aws-amplify';
import { Text, View, Button, TextInput } from 'react-native';

import styles from 'app/constants/Style'

class SendPokes extends React.Component {
  state = {
    username: '',
  }

  _sendPokes = async () => {
    console.log(this.props.navigation.state.params.pokes)
    console.log(this.state.username)
    let newNote = {
      body: {
        username: this.state.username,
        data: this.props.navigation.state.params.pokes
      }
    }
    const path = "/items";

    // Use the API module to save the note to the database
    try {
      const apiResponse = await API.put("pokeapi", path, newNote)
      console.log("response from saving note: " + apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }

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
          <Text style={{fontSize: 30, padding: 10}}>Send your poke!</Text>
        </View>

        <View style={styles.container}>
          <Text style={{fontSize: 12, padding: 10}}>Enter the username of the person you would like to poke</Text>
        </View>

        <View style={styles.container}>
        <TextInput
            placeholder="Enter Username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            style={{ height: 50, width: 250, borderColor: '#333', borderWidth: 0, borderBottomWidth: 1 }}
        />
        </View>

        <View style={{paddingTop: 10, height: 50, width: 250}}>
          <Button
            title="Send Pokes"
            onPress={this._sendPokes} />
        </View>

      </View>
    );
  }
}


export default SendPokes