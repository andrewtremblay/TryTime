/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';

class BeliefScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>BeliefScreen</Text>
        </View>
    );
  }
}

export default CommonOnboarding(BeliefScreen);