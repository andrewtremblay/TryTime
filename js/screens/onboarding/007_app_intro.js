/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';
import { AppIntro as pageData } from './onboardingContent';

class AppIntroScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>{pageData.bodyText}</Text>
        </View>
    );
  }
}

export default CommonOnboarding(AppIntroScreen);