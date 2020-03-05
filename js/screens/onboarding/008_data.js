/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';

class DataScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>Screen</Text>
        </View>
    );
  }
}

export default CommonOnboarding(DataScreen);
