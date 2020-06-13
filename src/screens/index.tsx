import MainList from './MainList';
import AppEntryPoint from './AppEntryPoint';
import Settings from './Settings';

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
SelectEventType,
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
    Settings,
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
    SelectEventType,
    CreateAsEmotionScreen,
    CreateAsActionScreen,
    CreateBeliefScreen,
    DisputeBeliefScreen,
    EstablishEmotionScreen,
    FinalSummaryScreen,    
};
