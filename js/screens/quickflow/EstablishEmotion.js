/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import {styles} from '../styles';

export default class EstablishEmotion extends React.Component<any> {
  navigateToA = () => {
    this.props.navigation.navigate('ScreenA');
  };

  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <TouchableHighlight onPress={this.navigateToA}>
          <View style={styles.body}>
            <Text>Screen B</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
