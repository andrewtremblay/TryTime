import React from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ColumnContainer} from '../../components/AppComponents';

export default class SelectEventType extends React.Component<any> {
  debugResetOnboarding = () => {
    AsyncStorage.removeItem('onboarding.isFinished');
  };
  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <ColumnContainer>
          <Text>Create Generic</Text>
          <Button
            title="reset onboarding"
            onPress={this.debugResetOnboarding}
          />
          <Button
            title="go back"
            onPress={this.goBack}
          />
      </ColumnContainer>
    );
  }
}
