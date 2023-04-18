import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ImageDetail = props => {
  const { title, imageSource, imageScore } = props;
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>image score {imageScore}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
