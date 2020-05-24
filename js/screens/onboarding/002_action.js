/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';
import { Action as pageData } from './onboardingContent';

class ActionScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>{pageData.bodyText}</Text>
        </View>
    );
  }
}

export default CommonOnboarding(ActionScreen);