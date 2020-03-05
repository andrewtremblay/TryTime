import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Button, TouchableHighlight, AsyncStorage} from 'react-native';

export default class Create extends React.Component<any> {
  debugResetOnboarding = () => {
    AsyncStorage.removeItem('onboarding.isFinished');
  }
  
  render() {
      return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View>
                <Text>Create Generic</Text>
                <Button title="reset onboarding" onPress={this.debugResetOnboarding}/>
            </View>
          </SafeAreaView>
        </View>
      );
  }
};