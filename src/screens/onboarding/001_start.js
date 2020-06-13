/**
 * @flow
 */

import React from 'react';
import CommonOnboarding from './wrapper';
import onboardingContent from './onboardingContent';

import { OnboardingText, CenterContainer } from '../../components/AppComponents';

const {StartScreen: pageData} = onboardingContent;

class StartScreen extends React.Component<any> {
  render() {
    return (
        <CenterContainer>
          <OnboardingText>{pageData.bodyText}</OnboardingText>
        </CenterContainer>
    );
  }
}

export default CommonOnboarding(StartScreen);
