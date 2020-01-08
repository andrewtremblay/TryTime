/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';

import {styles} from './styles';

export default class ScreenA extends React.Component<any> {
  navigateToB = () => {
    this.props.navigation.navigate('finish');
  };

  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <TouchableHighlight onPress={this.navigateToB}>
          <View style={styles.body}>
            <Text>Register</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
