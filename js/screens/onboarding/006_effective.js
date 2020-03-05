/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';

class EffectiveScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>EffectiveScreen</Text>
        </View>
    );
  }
}

export default CommonOnboarding(EffectiveScreen);