/**
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import CommonOnboarding from './wrapper';
import onboardingContent from './onboardingContent';
import { OnboardingText, CenterContent } from '../../components/AppComponents';

const {Action: pageData} = onboardingContent;

class ActionScreen extends React.Component<any> {
  render() {
    return (
    <CenterContent>
      <OnboardingText>{pageData.bodyText}</OnboardingText>
    </CenterContent>
);
  }
}

export default CommonOnboarding(ActionScreen);
