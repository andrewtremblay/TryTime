/**
 * @flow
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Button, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';
import { StartScreen as pageData } from './onboardingContent';

class StartScreen extends React.Component<any> {
  render() {
      return (
        <View>
          <View>
            <Text>{pageData.bodyText}</Text>
          </View>
        </View>
      );
  }
};


export default CommonOnboarding(StartScreen);