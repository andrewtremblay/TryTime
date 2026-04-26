import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import type {RootStackParamList} from './types';

import AppEntryPoint from '../screens/AppEntryPoint';
import {MainList} from '../screens';
import {OnboardingScreen} from '../screens/onboarding';
import {
  SelectEventTypeScreen,
  CreateAsEmotionScreen,
  CreateAsActionScreen,
  CreateBeliefScreen,
  DisputeBeliefScreen,
  EstablishEmotionScreen,
  FinalSummaryScreen,
} from '../screens/quickflow';

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routes.AppEntryPoint}
      screenOptions={{headerShown: false}}>
      {/* App entry — redirects based on onboarding status */}
      <Stack.Screen name={routes.AppEntryPoint} component={AppEntryPoint} />

      {/* Main */}
      <Stack.Screen name={routes.MainList} component={MainList} />

      {/* Onboarding — all 8 routes share one component */}
      <Stack.Screen name={routes.StartScreen} component={OnboardingScreen} />
      <Stack.Screen name={routes.Action} component={OnboardingScreen} />
      <Stack.Screen name={routes.Belief} component={OnboardingScreen} />
      <Stack.Screen name={routes.Consequences} component={OnboardingScreen} />
      <Stack.Screen name={routes.Dispute} component={OnboardingScreen} />
      <Stack.Screen
        name={routes.EffectiveEmotion}
        component={OnboardingScreen}
      />
      <Stack.Screen name={routes.AppIntro} component={OnboardingScreen} />
      <Stack.Screen
        name={routes.DataPermission}
        component={OnboardingScreen}
      />

      {/* Quickflow */}
      <Stack.Screen
        name={routes.SelectEventType}
        component={SelectEventTypeScreen}
      />
      <Stack.Screen
        name={routes.CreateAsEmotionScreen}
        component={CreateAsEmotionScreen}
      />
      <Stack.Screen
        name={routes.CreateAsActionScreen}
        component={CreateAsActionScreen}
      />
      <Stack.Screen
        name={routes.CreateBeliefScreen}
        component={CreateBeliefScreen}
      />
      <Stack.Screen
        name={routes.DisputeBeliefScreen}
        component={DisputeBeliefScreen}
      />
      <Stack.Screen
        name={routes.EstablishEmotionScreen}
        component={EstablishEmotionScreen}
      />
      <Stack.Screen
        name={routes.FinalSummaryScreen}
        component={FinalSummaryScreen}
      />
    </Stack.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
