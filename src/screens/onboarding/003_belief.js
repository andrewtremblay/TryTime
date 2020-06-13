/**
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import CommonOnboarding from './wrapper';
import onboardingContent from './onboardingContent';
import { OnboardingText, CenterContent } from '../../components/AppComponents';

const {Belief: pageData} = onboardingContent;

class BeliefScreen extends React.Component<any> {
  render() {
    return (
    <CenterContent>
      <OnboardingText>{pageData.bodyText}</OnboardingText>
    </CenterContent>
    );
  }
}

export default CommonOnboarding(BeliefScreen);
