import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  AppEntryPoint: undefined;
  MainList: undefined;
  // Onboarding
  StartScreen: undefined;
  Action: undefined;
  Belief: undefined;
  Consequences: undefined;
  Dispute: undefined;
  EffectiveEmotion: undefined;
  AppIntro: undefined;
  DataPermission: undefined;
  // Quickflow
  SelectEventType: undefined;
  CreateAsEmotionScreen: undefined;
  CreateAsActionScreen: undefined;
  CreateBeliefScreen: undefined;
  DisputeBeliefScreen: undefined;
  EstablishEmotionScreen: undefined;
  FinalSummaryScreen: undefined;
};

export type RootNavProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type RootRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
