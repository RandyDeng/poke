import React from 'react';
import {
    Button,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    View
 } from 'react-native';

import styles from 'app/constants/Style'

export default class PokeScreen extends React.Component {

    _handlePress(evt) {
        console.log(evt)
        console.log(evt.nativeEvent.locationX + ',' + evt.nativeEvent.locationY);
    }

    _sendPokes = () => {
        console.log('send pokes!')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <TouchableNativeFeedback
                        onPress={(evt) => this._handlePress(evt)}
                        background={TouchableNativeFeedback.Ripple(color='blue')}>
                    <View style={{flex: 4, backgroundColor: 'white'}} />
                </TouchableNativeFeedback>

                <TouchableOpacity style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#2196F3'
                    }}
                    onPress={this._sendPokes}>
                    <Text style={{ fontSize: 25, color: "white" }}>Send Pokes</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
