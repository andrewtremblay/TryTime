import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import onboardingContent from '../../constants/onboardingContent';
import {useOnboardingStatus} from '../../hooks/useOnboardingStatus';
import routes from '../../navigation/routes';
import {Colors} from '../../styles/tokens';
import type {RootNavProp, RootRouteProp} from '../../navigation/types';

const onboardingRouteOrder = [
  routes.StartScreen,
  routes.Action,
  routes.Belief,
  routes.Consequences,
  routes.Dispute,
  routes.EffectiveEmotion,
  routes.AppIntro,
  routes.DataPermission,
] as const;

type OnboardingRouteName = (typeof onboardingRouteOrder)[number];

type Props = {
  route: RootRouteProp<OnboardingRouteName>;
  navigation: RootNavProp<OnboardingRouteName>;
};

export default function OnboardingScreen({route, navigation}: Props) {
  const {name} = route;
  const content = onboardingContent[name];
  const {markComplete} = useOnboardingStatus();

  const onNext = async () => {
    const idx = onboardingRouteOrder.indexOf(name as OnboardingRouteName);
    const isLast = idx === onboardingRouteOrder.length - 1;

    if (isLast) {
      await markComplete();
      navigation.reset({index: 0, routes: [{name: routes.MainList}]});
    } else {
      navigation.navigate(onboardingRouteOrder[idx + 1]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.body}>{content?.bodyText ?? ''}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.background},
  content: {flex: 1, justifyContent: 'center', paddingHorizontal: 32},
  body: {fontSize: 28, color: Colors.text, lineHeight: 40},
  button: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  buttonText: {fontSize: 18, color: Colors.background},
});
