/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';

class ConsequenceScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>Consequence Screen</Text>
        </View>
    );
  }
}


export default CommonOnboarding(ConsequenceScreen);
