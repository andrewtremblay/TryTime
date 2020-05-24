/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';
import { Dispute as pageData } from './onboardingContent';

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
