/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';
import { DataPermission } from './onboardingContent';

class DataScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>{DataPermission.bodyText}</Text>
        </View>
    );
  }
}

export default CommonOnboarding(DataScreen);
