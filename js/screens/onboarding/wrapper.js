// @flow
import React from 'react';
import {SafeAreaView, View, StatusBar, Button, AsyncStorage } from 'react-native';
import routes, { screenAfterOnboarding } from '../../Routes';


const routeOrder = [
  routes.StartScreen, 
  routes.Action,
  routes.Belief, 
  routes.Consequences,
  routes.Dispute, 
  routes.EffectiveEmotion, 
  routes.AppIntro,
  routes.DataPermission
];

const resetToScreen = routeName => ({
  type: 'Navigation/RESET',
  index: 0,
  actions: [{type: 'Navigation/NAVIGATE', routeName }]
});

const commonScreen = ScreenComponent => {
  class Screen extends React.Component<any> {
    nextRoute = () => {
      const nextRouteIndex = routeOrder.indexOf(this.props.navigation.state.routeName) + 1;
      return routeOrder.length > nextRouteIndex ? routeOrder[nextRouteIndex] : screenAfterOnboarding;  
    }

    nextButtonPress = () => {
      const nextRoute = this.nextRoute();
      if (screenAfterOnboarding === nextRoute) {
        AsyncStorage.setItem('onboarding.isFinished', 'true', (e) => {
          if(e) console.error(e);
          this.props.navigation.navigate({ routeName: nextRoute });
        });
      } else {
        this.props.navigation.navigate({ routeName: nextRoute });
      }
    }
    render() {
      return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScreenComponent navigation={this.props.navigation} />
            <Button onPress={this.nextButtonPress} title={"Next " + this.nextRoute()} />
          </SafeAreaView>
        </View>
      );
    }
  }
  return Screen;
};

export default commonScreen;
