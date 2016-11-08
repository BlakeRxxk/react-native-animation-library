import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Switch
} from 'react-native';
import {RNALPrettySwitch} from 'react-native-animation-library';

export class GroupChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onSwitchChanged(val) {
    console.log('_onSwitchChanged', val);
    this.setState({noiseMakerIsOn: val});
  }

  renderButton() {
    return (
      <View style={{
        position: 'absolute',
        right: 25,
        top: 193,
      }}>
        <RNALPrettySwitch />
      </View>
    )
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'stretch',
          backgroundColor: '#F5FCFF',
          position: 'relative'
        }}>
        <Image
          source={require('../assets/group-chat-screen.png')}
          style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: null,
              height: null,
            }}
        />
        {this.renderButton()}


      </View>
    );
  }
}
