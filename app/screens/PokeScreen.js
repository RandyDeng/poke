import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
 } from 'react-native';

import styles from 'app/constants/Style'

export default class PokeScreen extends React.Component {

    _handlePress(evt) {
        console.log(evt.nativeEvent.locationX + ',' + evt.nativeEvent.locationY);
    }

    render() {
        return (
            <TouchableOpacity onPress={(evt) => this._handlePress(evt)}>
                <View style={styles.fullScreen}>
                    <Text>Something Something</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
