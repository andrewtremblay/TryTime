/**
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <View style={[styles.black, styles.fill]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.black}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.black}>
            <Text style={styles.sectionTitle}>Activating Event</Text>
            <TextInput style={styles.sectionInput} multiline={true}/> 
            <Text style={styles.sectionTitle}>Belief</Text>
            <TextInput style={styles.sectionInput} multiline={true}/> 
            <Text style={styles.sectionTitle}>Consequence</Text>
            <TextInput style={styles.sectionInput} multiline={true}/> 
            <Text style={styles.sectionTitle}>Dispute</Text>
            <TextInput style={styles.sectionInput} multiline={true}/> 
            <Text style={styles.sectionTitle}>Effective Emotion</Text>
            <TextInput style={styles.sectionInput} multiline={true}/> 
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  black: {
    backgroundColor: 'black',
  },
  fill: {
    position: 'absolute',
    right: 0,
    height:'100%',
    width:'100%'
  },
  sectionTitle: {
    color: 'white',
    marginHorizontal: 5,
    fontSize: 25,
  },
  sectionInput: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'black',
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

export default App;
