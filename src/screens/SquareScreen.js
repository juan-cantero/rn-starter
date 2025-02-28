import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useReducer } from 'react';
import ColorCounter from '../components/ColorCounter';

INCREMENT = 15;
DECREMENT = -15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red',payload: 15 }
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: DECREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: DECREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: DECREMENT })}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
