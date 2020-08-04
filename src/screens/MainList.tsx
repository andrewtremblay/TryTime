/**
 * @flow
 */

import React from 'react';
import moment from 'moment';
import {StyleSheet,Text, TouchableOpacity, View} from 'react-native';

import {styles} from '../Styles';
import {FlatList} from 'react-native-gesture-handler';
import routes from '../Routes';
import {ColumnContainer, AppText} from '../components/AppComponents';
import Gear from '../components/svg/gear';

type State = {
  loadedEvents: any[];
};

export const localStyles = StyleSheet.create({
  mainList: {
    marginTop: 35,
  },
  rightCorner: {
    position: 'absolute',
    right: 14,
    top: 14,
    zIndex: 100,
  },
  fullWidth: {
    width: '100%',
    paddingBottom: 15,
  },
  fullWidthText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 22,
  },
  row: {
    width: '100%',
  },
  rowContent: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  rowTitle: {
    fontSize: 20,
    paddingVertical: 3,
  },
  rowDate: {
    fontSize: 15,
    paddingBottom: 3,
  }
});

export default class MainList extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loadedEvents: [
        {title: 'life needs to be fair, but we have to work to make it fair', updatedAt: new Date(), key: 'item1', uuid: '1'},
        {title: 'life needs to be fair', updatedAt: new Date(), key: 'item2', uuid: '1'},
        {title: 'Title Text', updatedAt: new Date(), key: 'item3', uuid: '1'},
        {title: 'Title Text', updatedAt: new Date(), key: 'item4', uuid: '1'},
        {title: 'Title Text', updatedAt: new Date(), key: 'item6', uuid: '1'},
        {title: 'Title Text', updatedAt: new Date(), key: 'item7', uuid: '1'},
        {title: 'Title Text', updatedAt: new Date(), key: 'item8', uuid: '1'},
        {title: 'Title Text', updatedAt: new Date(), key: 'item9', uuid: '1'},
        {title: 'Title Text', updatedAt: new Date(), key: 'item10', uuid: '1'},
        {title: 'life needs to be fair, but we have to work to make it fair', updatedAt: new Date(), key: 'item11', uuid: '1'},
        {title: 'life needs to be fair', updatedAt: new Date(), key: 'item12', uuid: '1'},
        {title: 'life needs to be fair, but we have to work to make it fair', updatedAt: new Date(), key: 'item13', uuid: '1'},
      ],
    };
  }

  onItemPress = (item: any) => console.warn(item.key);
  renderItem = ({item}) => (
    <View style={localStyles.row} >
     <TouchableOpacity onPress={() => this.onItemPress(item)}>
      <View style={localStyles.rowContent}>
      <AppText textStyle={localStyles.rowTitle}>{item.title}</AppText>
      <AppText textStyle={localStyles.rowDate}>{moment(item.updatedAt).format('YYYY/MM/DD h:mmA')}</AppText>
      </View>
     </TouchableOpacity>
    </View>
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
      : 'new event (total:' + this.state.loadedEvents.length + ')' ;
  }

  render() {
    return (
      <ColumnContainer>
        <View style={localStyles.rightCorner} >
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={this.navigateToSettings}>
              <Gear />
          </TouchableOpacity>
        </View>
        <FlatList
          style={[styles.fullList, localStyles.mainList]}
          data={this.state.loadedEvents}
          renderItem={this.renderItem}
        />
        <View style={localStyles.fullWidth} >
          <TouchableOpacity onPress={this.navigateToCreateEvent}>
            <AppText textStyle={localStyles.fullWidthText}>{this.addTitle}</AppText>
          </TouchableOpacity>
        </View>
      </ColumnContainer>
    );
  }
}
