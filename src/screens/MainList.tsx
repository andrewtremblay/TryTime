import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import routes from '../navigation/routes';
import {Colors} from '../styles/tokens';
import type {RootNavProp} from '../navigation/types';

type Event = {
  title: string;
  key: string;
  uuid: string;
};

type Props = {
  navigation: RootNavProp<'MainList'>;
};

export default function MainList({navigation}: Props) {
  const [events] = useState<Event[]>([
    {title: 'Title Text', key: 'item1', uuid: '1'},
  ]);

  const renderItem = ({item}: {item: Event}) => (
    <TouchableOpacity onPress={() => console.log(item.key)}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const addTitle =
    events.length === 0 ? 'tap here to\nrecord your first event' : 'new event';

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate(routes.SelectEventType)}>
        <Text style={styles.addButtonText}>{addTitle}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  list: {flex: 1, backgroundColor: Colors.background},
  itemText: {fontSize: 16, padding: 16, color: Colors.text},
  addButton: {padding: 16, alignItems: 'center'},
  addButtonText: {fontSize: 18, color: Colors.background},
});
