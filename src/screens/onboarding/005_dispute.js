/**
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import CommonOnboarding from './wrapper';
import onboardingContent from './onboardingContent';
const {Dispute: pageData} = onboardingContent;

class DisputeScreen extends React.Component<any> {
  render() {
    return (
      <View>
        <Text>{pageData.bodyText}</Text>
      </View>
    );
  }
}

export default CommonOnboarding(DisputeScreen);
