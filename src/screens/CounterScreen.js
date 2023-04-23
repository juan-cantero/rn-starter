import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react/cjs/react.production.min';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase', payload: 1 });
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease', payload: 1 });
        }}
      />
      <Text>Current count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
