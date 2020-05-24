const routes = {
  OnboardingNavigator: 'OnboardingNavigator',
  AppEntryPoint: 'AppEntryPoint',
  MainList: 'MainList',
  Settings: 'Settings',
  // onboarding
  StartScreen: 'StartScreen',
  Action: 'Action',
  Belief: 'Belief',
  Consequences: 'Consequences',
  Dispute: 'Dispute',
  EffectiveEmotion: 'EffectiveEmotion',
  AppIntro: 'AppIntro',
  DataPermission: 'DataPermission',
  // quickflow
  SelectEventType: 'SelectEventType',
  CreateAsEmotionScreen: 'CreateAsEmotionScreen',
  CreateAsActionScreen: 'CreateAsActionScreen',
  CreateBeliefScreen: 'CreateBeliefScreen',
  DisputeBeliefScreen: 'DisputeBeliefScreen',
  EstablishEmotionScreen: 'EstablishEmotionScreen',
  FinalSummaryScreen: 'FinalSummaryScreen',
};

export const screenAfterOnboarding = routes.MainList;
export default routes;
