// @flow

import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HarmonyApp extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>
        <View style={styles.contentContainer}>
          <Text>Soprano</Text>
          <Text>Alto</Text>
          <Text>Tenor</Text>
          <Text>Bass</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
