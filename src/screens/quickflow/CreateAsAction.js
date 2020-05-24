/**
 * @flow
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Button, TouchableHighlight} from 'react-native';

export default class CreateAsEvent extends React.Component<any> {
  render() {
      return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View>
                <Text>Create As Event</Text>
            </View>
          </SafeAreaView>
        </View>
      );
  }
};