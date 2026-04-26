import {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'onboarding.isFinished';

type Status = 'loading' | 'done' | 'pending';

export function useOnboardingStatus() {
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(val => {
      setStatus(val === 'true' ? 'done' : 'pending');
    });
  }, []);

  const markComplete = useCallback(
    () =>
      AsyncStorage.setItem(STORAGE_KEY, 'true').then(() => setStatus('done')),
    [],
  );

  const reset = useCallback(
    () =>
      AsyncStorage.removeItem(STORAGE_KEY).then(() => setStatus('pending')),
    [],
  );

  return {status, markComplete, reset};
}
