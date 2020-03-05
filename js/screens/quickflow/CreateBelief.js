/**
 * @flow
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Button, TouchableHighlight} from 'react-native';

export default class CreateBelief extends React.Component<any> {
  render() {
      return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View>
                <Text>Create As Belief</Text>
            </View>
          </SafeAreaView>
        </View>
      );
  }
};