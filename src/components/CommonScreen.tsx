import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';

export default class CommonScreen extends React.Component<any> {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>{this.props.children}</SafeAreaView>
      </View>
    );
  }
}
