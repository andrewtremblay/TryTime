/**
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import CommonOnboarding from './wrapper';
import onboardingContent from './onboardingContent';
import { OnboardingText, CenterContainer } from '../../components/AppComponents';

const {Belief: pageData} = onboardingContent;

class BeliefScreen extends React.Component<any> {
  render() {
    return (
    <CenterContainer>
      <OnboardingText>{pageData.bodyText}</OnboardingText>
    </CenterContainer>
    );
  }
}

export default CommonOnboarding(BeliefScreen);
