/**
 * @flow
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from '../Styles';
import {FlatList} from 'react-native-gesture-handler';
import routes from '../Routes';
import {ColumnContainer} from '../components/AppComponents';

type State = {
  loadedEvents: any[];
};

export default class MainList extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      loadedEvents: [{title: 'Title Text', key: 'item1', uuid: '1'}],
    };
  }

  onItemPress = (item) => console.log(item.key);
  renderItem = ({item}) => (
    <TouchableOpacity onPress={() => this.onItemPress(item)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  navigateToCreateEvent = () => {
    this.props.navigation.navigate(routes.SelectEventType);
  };

  navigateToSettings = () => {
    this.props.navigation.navigate(routes.Settings);
  };

  get addTitle() {
    return this.state.loadedEvents.length === 0
      ? 'tap here to\nrecord your first event'
      : 'new event';
  }

  render() {
    return (
      <ColumnContainer>
        <FlatList
          style={styles.fullList}
          data={this.state.loadedEvents}
          renderItem={this.renderItem}
        />
        <TouchableOpacity onPress={this.navigateToCreateEvent}>
          <Text>{this.addTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={this.navigateToSettings}>
          <Text>settings</Text>
        </TouchableOpacity>
      </ColumnContainer>
    );
  }
}
