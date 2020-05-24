import MainList from './MainList';
import AppEntryPoint from './AppEntryPoint';

import {
StartScreen,
Action,
Belief,
Consequences,
Dispute,
EffectiveEmotion,
AppIntro,
DataPermission,
} from './onboarding';

import {
SelectEventTypeScreen,
CreateAsEmotionScreen,
CreateAsActionScreen,
CreateBeliefScreen,
DisputeBeliefScreen,
EstablishEmotionScreen,
FinalSummaryScreen,
} from './quickflow';

  export default {
    AppEntryPoint,
    MainList,
    // onboarding
    StartScreen,
    Action,
    Belief,
    Consequences,
    Dispute,
    EffectiveEmotion,
    AppIntro,
    DataPermission,
    // quickflow
    SelectEventTypeScreen,
    CreateAsEmotionScreen,
    CreateAsActionScreen,
    CreateBeliefScreen,
    DisputeBeliefScreen,
    EstablishEmotionScreen,
    FinalSummaryScreen,    
};
