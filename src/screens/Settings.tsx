/**
 * @flow
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ColumnContainer} from '../components/AppComponents';
import {styles} from '../Styles';
import routes from '../Routes';

type State = {
};

export default class Settings extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  resetOnboarding = () => {
    this.props.navigation.navigate(routes.StartScreen);
  }

  navigateToMainList = () => {
    this.props.navigation.navigate(routes.MainList);
  };

  render() {
    return (
      <ColumnContainer>
        <TouchableOpacity onPress={this.resetOnboarding}>
          <Text>onboarding</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={this.navigateToMainList}>
          <Text>main list</Text>
        </TouchableOpacity>
      </ColumnContainer>
    );
  }
}
