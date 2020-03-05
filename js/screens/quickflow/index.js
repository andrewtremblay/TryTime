import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';

import Create from './Create';
import CreateAsEmotion from './DisputeBelief';
import CreateAsEvent from './CreateAsEvent';
import CreateBelief from './CreateBelief';
import DisputeBelief from './DisputeBelief';
import EstablishEmotion from './EstablishEmotion';
import FinalSummary from './FinalSummary';

const commonScreen = ScreenComponent => {
  class Screen extends React.Component<any> {
    render() {
      return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScreenComponent navigation={this.props.navigation} />
          </SafeAreaView>
        </View>
      );
    }
  }
  return Screen;
};

export const CreateScreen = commonScreen(Create);
export const CreateAsEmotionScreen = commonScreen(CreateAsEmotion);
export const CreateAsEventScreen = commonScreen(CreateAsEvent);
export const CreateBeliefScreen = commonScreen(CreateBelief);
export const DisputeBeliefScreen = commonScreen(DisputeBelief);
export const EstablishEmotionScreen = commonScreen(EstablishEmotion);
export const FinalSummaryScreen = commonScreen(FinalSummary);
