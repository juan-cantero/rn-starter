import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ComponentScreen = () => {
  const name = 'Juan';
  return (
    <View>
      <Text style={styles.textTitle}>Getting started with react native!</Text>
      <Text style={styles.textName}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: { fontSize: 45 },
  textName: { fontSize: 20 },
});

export default ComponentScreen;
