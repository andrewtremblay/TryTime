/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  ScreenA,
  ScreenB,
  WelcomeScreen,
  RegisterScreen,
  FinishScreen,
} from './screens';

const OnboardingNavigator = createStackNavigator({
  welcome: {screen: WelcomeScreen},
  register: {screen: RegisterScreen},
  finish: {screen: FinishScreen},
});

const AppNavigator = createStackNavigator(
  {
    OnboardingNavigator: {screen: OnboardingNavigator},
    ScreenA: {
      screen: ScreenA,
    },
    ScreenB: {
      screen: ScreenB,
    },
  },
  {
    initialRouteName: 'OnboardingNavigator',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
  return <AppContainer />;
};

export default App;
