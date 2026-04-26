import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useOnboardingStatus} from '../../hooks/useOnboardingStatus';
import routes from '../../navigation/routes';
import {Colors} from '../../styles/tokens';
import type {RootNavProp} from '../../navigation/types';

type Props = {
  navigation: RootNavProp<'SelectEventType'>;
};

export default function SelectEventType({navigation}: Props) {
  const {reset} = useOnboardingStatus();

  const debugResetOnboarding = async () => {
    await reset();
    navigation.reset({index: 0, routes: [{name: routes.AppEntryPoint}]});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>what happened?</Text>
      </View>
      <Button title="[debug] reset onboarding" onPress={debugResetOnboarding} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.background},
  content: {flex: 1, justifyContent: 'center', paddingHorizontal: 32},
  title: {fontSize: 28, color: Colors.text},
});
