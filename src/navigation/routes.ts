const routes = {
  // App flow
  AppEntryPoint: 'AppEntryPoint',
  MainList: 'MainList',
  // Onboarding
  StartScreen: 'StartScreen',
  Action: 'Action',
  Belief: 'Belief',
  Consequences: 'Consequences',
  Dispute: 'Dispute',
  EffectiveEmotion: 'EffectiveEmotion',
  AppIntro: 'AppIntro',
  DataPermission: 'DataPermission',
  // Quickflow
  SelectEventType: 'SelectEventType',
  CreateAsEmotionScreen: 'CreateAsEmotionScreen',
  CreateAsActionScreen: 'CreateAsActionScreen',
  CreateBeliefScreen: 'CreateBeliefScreen',
  DisputeBeliefScreen: 'DisputeBeliefScreen',
  EstablishEmotionScreen: 'EstablishEmotionScreen',
  FinalSummaryScreen: 'FinalSummaryScreen',
} as const;

export type RouteName = (typeof routes)[keyof typeof routes];
export const screenAfterOnboarding = routes.MainList;
export default routes;
