import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useOnboardingStatus} from '../hooks/useOnboardingStatus';
import routes from '../navigation/routes';
import type {RootNavProp} from '../navigation/types';

type Props = {
  navigation: RootNavProp<'AppEntryPoint'>;
};

export default function AppEntryPoint({navigation}: Props) {
  const {status} = useOnboardingStatus();

  useEffect(() => {
    if (status === 'done') {
      navigation.reset({index: 0, routes: [{name: routes.MainList}]});
    } else if (status === 'pending') {
      navigation.reset({index: 0, routes: [{name: routes.StartScreen}]});
    }
  }, [status, navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
