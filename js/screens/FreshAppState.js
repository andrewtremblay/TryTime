import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { NavigationResetAction } from 'react-navigation';
import Routes, {screenAfterOnboarding} from '../Routes';

const resetToScreen = routeName => ({
    type: 'Navigation/RESET',
    index: 0,
    actions: [{type: 'Navigation/NAVIGATE', routeName }],
});

// setup and teardown for app state
export default class FreshAppState extends React.Component<any> {
  componentDidMount(){
    AsyncStorage.getItem('onboarding.isFinished', (e, res) => {
        if(e) console.error(e);
        if (res === 'true') {
            this.props.navigation.dispatch(resetToScreen(screenAfterOnboarding));
        } else {
            this.props.navigation.dispatch(resetToScreen(Routes.OnboardingNavigator));
        }
    })
  }

  render() {
    return (
      <View />
    );
  }
}
