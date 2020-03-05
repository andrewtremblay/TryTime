/**
 * @flow
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Button, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';

class StartScreen extends React.Component<any> {
  render() {
      return (
        <View>
            <View>
              <Text>Start Screen</Text>
          </View>
        </View>
      );
  }
};


export default CommonOnboarding(StartScreen);