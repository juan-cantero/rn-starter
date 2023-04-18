import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImageDetail from './ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        imageScore={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        imageScore={9}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={9}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
