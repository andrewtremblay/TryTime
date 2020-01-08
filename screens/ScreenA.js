/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';

import {styles} from './styles';

export default class ScreenA extends React.Component<any> {
  navigateToB = () => {
    this.props.navigation.navigate('ScreenB');
  };

  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <TouchableHighlight onPress={this.navigateToB}>
          <View style={styles.body}>
            <Text>Screen A</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
