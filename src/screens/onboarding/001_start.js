/**
 * @flow
 */

import React from 'react';
import CommonOnboarding from './wrapper';
import onboardingContent from './onboardingContent';

import { OnboardingText, CenterContent } from '../../components/AppComponents';

const {StartScreen: pageData} = onboardingContent;

class StartScreen extends React.Component<any> {
  render() {
    return (
        <CenterContent>
          <OnboardingText>{pageData.bodyText}</OnboardingText>
        </CenterContent>
    );
  }
}

export default CommonOnboarding(StartScreen);
