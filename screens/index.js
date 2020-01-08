import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';

import ScreenAComponent from './ScreenA';
import ScreenBComponent from './ScreenB';
import FinishScreenComponent from './FinishScreen';
import WelcomeScreenComponent from './WelcomeScreen';
import RegisterScreenComponent from './RegisterScreen';

const commonScreen = ScreenComponent => {
  class Screen extends React.Component<any> {
    render() {
      return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScreenComponent navigation={this.props.navigation} />
          </SafeAreaView>
        </View>
      );
    }
  }
  return Screen;
};

export const ScreenA = commonScreen(ScreenAComponent);
export const ScreenB = commonScreen(ScreenBComponent);
export const FinishScreen = commonScreen(FinishScreenComponent);
export const WelcomeScreen = commonScreen(WelcomeScreenComponent);
export const RegisterScreen = commonScreen(RegisterScreenComponent);
