/**
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import CommonOnboarding from './wrapper';
import onboardingContent from './onboardingContent';
const {StartScreen: pageData} = onboardingContent;

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
}

export default CommonOnboarding(StartScreen);
