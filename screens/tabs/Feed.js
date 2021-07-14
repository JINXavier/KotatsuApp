import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import Divider from 'react-native-divider';

// import Uitleg from './Uitleg';

const {width, height } = Dimensions.get('window');
export default function App() {
  return (
    <View>
    <View style={styles.Deviders}>
    <Divider borderColor="#6948f4" color="black" orientation="center">
        KOTATSU
    </Divider>
    </View>
    <Video source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
    rate={1.0}
    volume={1.0}
    isMuted={false}
    resizeMode="cover"
    shouldPlay
    isLooping={false}
    useNativeControls
    style={styles.video}
  />
  <View style={styles.Deviders}>
    <Divider borderColor="#6948f4" color="black" orientation="center">
        NIEUWS FEED
    </Divider>
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    borderWidth: 0.5,
    borderColor: "#6948f4",
    marginTop: 5,
    width: width,
    height: height/ 3

  },
  Deviders: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6948f4'
  }
});