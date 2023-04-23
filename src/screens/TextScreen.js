import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
