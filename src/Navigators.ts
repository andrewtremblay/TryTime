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
  SelectEventTypeScreen,
  CreateAsEmotionScreen,
  CreateAsActionScreen,
  CreateBeliefScreen,
  DisputeBeliefScreen,
  EstablishEmotionScreen,
  FinalSummaryScreen,
} from './screens/quickflow';

import MainList from './screens/MainList';
import AppEntryPoint from './screens/AppEntryPoint';

const OnboardingNavigator = createStackNavigator(
  {
    [routes.StartScreen]: {screen: StartScreen},
    [routes.Action]: {screen: Action},
    [routes.Belief]: {screen: Belief},
    [routes.Consequences]: {screen: Consequences},
    [routes.Dispute]: {screen: Dispute},
    [routes.EffectiveEmotion]: {screen: EffectiveEmotion},
    [routes.AppIntro]: {screen: AppIntro},
    [routes.DataPermission]: {screen: DataPermission},
  },
  {
    initialRouteName: routes.StartScreen,
    headerMode: 'none',
  },
);

const AppNavigator = createStackNavigator(
  {
    [routes.AppEntryPoint]: {screen: AppEntryPoint},
    [routes.MainList]: {screen: MainList},
    [routes.OnboardingNavigator]: {screen: OnboardingNavigator},
    [routes.SelectEventType]: {screen: SelectEventTypeScreen},
    [routes.CreateAsEmotionScreen]: {screen: CreateAsEmotionScreen},
    [routes.CreateAsActionScreen]: {screen: CreateAsActionScreen},
    [routes.CreateBeliefScreen]: {screen: CreateBeliefScreen},
    [routes.DisputeBeliefScreen]: {screen: DisputeBeliefScreen},
    [routes.EstablishEmotionScreen]: {screen: EstablishEmotionScreen},
    [routes.FinalSummaryScreen]: {screen: FinalSummaryScreen},
  },
  {
    initialRouteName: routes.AppEntryPoint,
    // headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
