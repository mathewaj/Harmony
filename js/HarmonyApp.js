// @flow

import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Video from 'react-native-video';

export default class HarmonyApp extends Component {
  render() {
    return (
      <TrackScrollingView />
    );
  }
}

const TrackScrollingView = () => {
  var _scrollView: ScrollView;
  return (
    <View style={styles.window}>
      <Video source={{uri: "https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab" }}/>
      <ScrollView
        horizontal={true}
        ref={(scrollView) => { _scrollView = scrollView; }}>
        <View>
          <TrackContainer color='yellow' />
          <TrackContainer color='green' />
          <TrackContainer color='blue' />
          <TrackContainer color='red' />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { _scrollView.scrollTo({x: 300}); }}>
        <Text>Scroll to start</Text>
      </TouchableOpacity>
    </View>
  );
}

const TrackContainer = ({color}) => (
  <View style={styles.trackContainer} backgroundColor={color}>
    <Text>Harro</Text>
  </View>
)

const styles = StyleSheet.create({
  window: {
    flex: 1,
    marginTop: 200,
    marginBottom: 200,
  },
  trackContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: 1000
  },
  button: {
   margin: 7,
   padding: 5,
   alignItems: 'center',
   backgroundColor: '#eaeaea',
   borderRadius: 3,
 }
});
