import React from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonScreen} from '../../components';

export default class Create extends React.Component<any> {
  debugResetOnboarding = () => {
    AsyncStorage.removeItem('onboarding.isFinished');
  };

  render() {
    return (
      <CommonScreen>
        <View>
          <Text>Create Generic</Text>
          <Button
            title="reset onboarding"
            onPress={this.debugResetOnboarding}
          />
        </View>
      </CommonScreen>
    );
  }
}
