/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';

class AppIntroScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>AppIntroScreen</Text>
        </View>
    );
  }
}

export default CommonOnboarding(AppIntroScreen);