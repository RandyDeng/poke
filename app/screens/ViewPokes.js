import React from 'react';
import { Auth, API } from 'aws-amplify';
import {
    Animated,
    Easing,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
 } from 'react-native';
 

export default class ViewPokes extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.pokes = []

        const maxOpacity = 0.12;

        this.rippleSize = 100;

        this.state = {
            maxOpacity,
            scaleValue: new Animated.Value(0.01),
            opacityValue: new Animated.Value(maxOpacity),
            locationXY: new Animated.ValueXY()
        };

        this.renderRippleView = this.renderRippleView.bind(this);
        this.onPressedIn = this.onPressedIn.bind(this);

        this.getData()
    }

    async getData() {
        const path = "/items";

        try {
          const apiResponse = await API.get("pokeapi", path);
          console.log("response from getting note: " + apiResponse);
          this.setState({apiResponse});
        } catch (e) {
          console.log(e);
        }
    }

    onPressedIn(centerX, centerY) {
        this.state.locationXY.setValue({ x: centerX, y: centerY });

        Animated.sequence([
            Animated.timing(this.state.scaleValue, {
                toValue: 1,
                duration: 200,
                easing: Easing.bezier(.17,.67,.83,.67),
            }),
            Animated.timing(this.state.opacityValue, {
                toValue: 0,
                duration: 150,
            })
        ]).start(() => {
            this.state.scaleValue.setValue(0.01);
            this.state.opacityValue.setValue(this.state.maxOpacity);
        });
    }

    renderRippleView(xy) {
        const { scaleValue, opacityValue } = this.state;

        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    left: xy.x,
                    top: xy.y,
                    width: this.rippleSize,
                    height: this.rippleSize,
                    borderRadius: this.rippleSize / 2,
                    transform: [{ scale: scaleValue }],
                    opacity: opacityValue,
                    backgroundColor: 'blue',
                }}
            />
        );
    }

    _sendPokes = () => {
        this.props.navigation.navigate('SendPokes', {'pokes': this.pokes})
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <TouchableWithoutFeedback>
                    <View style={{flex: 4, backgroundColor: 'white'}}>
                        {this.renderRippleView(this.state.locationXY)}
                    </View>
                </TouchableWithoutFeedback>

                <TouchableOpacity style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#2196F3"
                    }}
                    onPress={() => {this.props.navigation.navigate('App')}}>
                    <Text style={{ fontSize: 25, color: "white" }}>Run Away from Pokes</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
