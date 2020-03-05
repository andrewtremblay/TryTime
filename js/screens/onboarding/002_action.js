/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';

class ActionScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>ActionScreen</Text>
        </View>
    );
  }
}

export default CommonOnboarding(ActionScreen);