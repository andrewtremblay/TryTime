import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './Routes';
import screens from './screens';
const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.AppEntryPoint} headerMode="none">
        <Stack.Screen name={routes.AppEntryPoint} component={screens.AppEntryPoint} />
        <Stack.Screen name={routes.MainList} component={screens.MainList} />
        <Stack.Screen name={routes.Settings} component={screens.Settings} />

        {/*  */}
        <Stack.Screen name={routes.StartScreen} component={screens.StartScreen} />
        <Stack.Screen name={routes.Action} component={screens.Action} />
        <Stack.Screen name={routes.Belief} component={screens.Belief} />
        <Stack.Screen name={routes.Consequences} component={screens.Consequences} />
        <Stack.Screen name={routes.Dispute} component={screens.Dispute} />
        <Stack.Screen name={routes.EffectiveEmotion} component={screens.EffectiveEmotion} />
        <Stack.Screen name={routes.AppIntro} component={screens.AppIntro} />
        <Stack.Screen name={routes.DataPermission} component={screens.DataPermission} />
        {/*  */}
        <Stack.Screen name={routes.SelectEventType} component={screens.SelectEventType} />
        <Stack.Screen name={routes.CreateAsEmotionScreen} component={screens.CreateAsEmotionScreen} />
        <Stack.Screen name={routes.CreateAsActionScreen} component={screens.CreateAsActionScreen} />
        <Stack.Screen name={routes.CreateBeliefScreen} component={screens.CreateBeliefScreen} />
        <Stack.Screen name={routes.DisputeBeliefScreen} component={screens.DisputeBeliefScreen} />
        <Stack.Screen name={routes.EstablishEmotionScreen} component={screens.EstablishEmotionScreen} />
        <Stack.Screen name={routes.FinalSummaryScreen} component={screens.FinalSummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
