// Deze moet uiteindelijk achter een selectie menu komen te staan
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import Uitleg from './Uitleg';

const {width, height } = Dimensions.get('window');
export default function App() {
  return (
    <View>
      <Video source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
   <Uitleg/>
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
    borderColor: "#2163f6",
     marginTop: 5,
     marginLeft: 5,
     width: 400,
     height: height/ 3

  }
});