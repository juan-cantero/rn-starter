import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
