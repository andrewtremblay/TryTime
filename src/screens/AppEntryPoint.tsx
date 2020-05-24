import React from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Routes, {screenAfterOnboarding} from '../Routes';

// setup and teardown for app state
export default function AppEntryPoint({ navigation }) {
  AsyncStorage.getItem('onboarding.isFinished', (e, res) => {
    if (e) {
      console.error(e);
    }
    if (res === 'true') {
      navigation.reset({
        routes: [{ name: screenAfterOnboarding }],
      });
    } else {
      navigation.reset({
        routes: [{ name: Routes.StartScreen }],
      });
    }
  });
  return <View />;
}
