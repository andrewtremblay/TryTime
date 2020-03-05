import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import routes from './Routes'; 

import {
  StartScreen,
  Action,
  Belief,
  Consequences,
  Dispute,
  EffectiveEmotion,
  AppIntro,
  DataPermission,
} from './screens/onboarding';

import {
  CreateScreen,
  CreateAsEmotionScreen,
  CreateAsEventScreen,
  CreateBeliefScreen,
  DisputeBeliefScreen,
  EstablishEmotionScreen,
  FinalSummaryScreen,
} from './screens/quickflow';    

import MainList from './screens/MainList';
import FreshAppState from './screens/FreshAppState';

const OnboardingNavigator = createStackNavigator({
  [routes.StartScreen]: {screen: StartScreen},
  [routes.Action]: {screen:Action},
  [routes.Belief]: {screen:Belief},
  [routes.Consequences]: {screen:Consequences},
  [routes.Dispute]: {screen:Dispute},
  [routes.EffectiveEmotion]: {screen:EffectiveEmotion},
  [routes.AppIntro]: {screen:AppIntro},
  [routes.DataPermission]: {screen:DataPermission},
},
{
  initialRouteName: routes.StartScreen,
  headerMode: 'none',
});

const AppNavigator = createStackNavigator(
  {
    [routes.FreshAppState]: {screen: FreshAppState},
    [routes.MainList]: {screen: MainList},
    [routes.OnboardingNavigator]: {screen: OnboardingNavigator},
    [routes.CreateScreen]: { screen: CreateScreen },
    [routes.CreateAsEmotionScreen]: { screen: CreateAsEmotionScreen},
  },
  {
    initialRouteName: routes.FreshAppState,
    // headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;