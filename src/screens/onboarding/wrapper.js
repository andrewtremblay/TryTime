// @flow
import React from 'react';
import {SafeAreaView, View, StatusBar, Button, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import routes, {screenAfterOnboarding} from '../../Routes';
import { SelectEventTypeScreen } from '../quickflow';
import { OnboardingText } from '../../components/AppComponents';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Later on in your styles..
var styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    height: '100%',
    minHeight: 20,
    width: '100%',
  },
  onboardingScreen: {
    flexGrow: 1,
    height: 40, 
  },
  button: {
    flexGrow: 1,
    alignItems: "center",
  },
  hintText: {
    flexGrow: 0,
    textAlign: 'center',
    paddingBottom: 20,
  }
});

const routeOrder = [
  routes.StartScreen,
  routes.Action,
  routes.Belief,
  routes.Consequences,
  routes.Dispute,
  routes.EffectiveEmotion,
  routes.AppIntro,
  routes.DataPermission,
];

const commonScreen = (ScreenComponent) => {
  class Screen extends React.Component<any> {
    nextRoute = () => {
      const nextRouteIndex =
        routeOrder.indexOf(this.props.route.name) + 1;
      return routeOrder.length > nextRouteIndex
        ? routeOrder[nextRouteIndex]
        : screenAfterOnboarding;
    };

    nextButtonPress = () => {
      const nextRoute = this.nextRoute();
      if (screenAfterOnboarding === nextRoute) {
        AsyncStorage.setItem('onboarding.isFinished', 'true', (e) => {
          if (e) {
            console.error(e);
          }
          this.props.navigation.navigate(nextRoute);
        });
      } else {
        this.props.navigation.navigate(nextRoute);
      }
    };
    render() {
      return (
        <View style={[styles.fullScreen, {backgroundColor: 'white'}]}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView >
            <TouchableWithoutFeedback style={styles.button} onPress={this.nextButtonPress}>
              <View style={styles.container}>
                <View style={styles.onboardingScreen}>
                  <ScreenComponent 
                    navigation={this.props.navigation} 
                  />
                  </View>
                <OnboardingText style={styles.hintText}>tap to continue</OnboardingText>
              </View>
              </TouchableWithoutFeedback>
          </SafeAreaView>
          <LinearGradient 
              style={[styles.fullScreen, {zIndex: -100}]}
              start={{x: 0, y: 0}} end={{x: 1, y: 0}}
              locations={[0,0.2,0.8,1]}
              colors={['rgba(219, 222, 255, 0.5)', 'rgba(219, 222, 255, 0)', 'rgba(219, 222, 255, 0)', 'rgba(219, 222, 255, 0.5)']} 
              />            
        </View>
      );
    }
  }
  return Screen;
};

export default commonScreen;
