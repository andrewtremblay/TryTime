/**
 * @flow
 */
import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Button, TouchableHighlight} from 'react-native';

export default class CreateAsEmotion extends React.Component<any> {
  render() {
      return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View>
                <Text>Create As Emotion</Text>
            </View>
          </SafeAreaView>
        </View>
      );
  }
};