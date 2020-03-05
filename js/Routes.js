const routes = {
    OnboardingNavigator: 'OnboardingNavigator',
    FreshAppState: 'FreshAppState',
    MainList: 'MainList',
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
    CreateScreen: 'CreateScreen',
    CreateAsEmotionScreen: 'CreateAsEmotionScreen',
    CreateAsEventScreen: 'CreateAsEventScreen',
    CreateBeliefScreen: 'CreateBeliefScreen',
    DisputeBeliefScreen: 'DisputeBeliefScreen',
    EstablishEmotionScreen: 'EstablishEmotionScreen',
    FinalSummaryScreen: 'FinalSummaryScreen',  
};

export const screenAfterOnboarding = routes.MainList;
export default routes;