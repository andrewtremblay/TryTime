/**
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import CommonOnboarding from './wrapper';
import onboardingContent from './onboardingContent';
import { OnboardingText, CenterContainer } from '../../components/AppComponents';

const {Action: pageData} = onboardingContent;

class ActionScreen extends React.Component<any> {
  render() {
    return (
    <CenterContainer>
      <OnboardingText>{pageData.bodyText}</OnboardingText>
    </CenterContainer>
);
  }
}

export default CommonOnboarding(ActionScreen);
