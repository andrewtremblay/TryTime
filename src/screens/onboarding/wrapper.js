// @flow
import React from 'react';
import {SafeAreaView, View, StatusBar, Button, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import routes, {screenAfterOnboarding} from '../../Routes';
import { SelectEventTypeScreen } from '../quickflow';
import { OnboardingText, CommonContainer } from '../../components/AppComponents';
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
        <CommonContainer>
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
        </CommonContainer>
      );
    }
  }
  return Screen;
};

export default commonScreen;
