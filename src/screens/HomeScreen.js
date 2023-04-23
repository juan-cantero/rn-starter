import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = props => {
  const { navigation } = props;
  return (
    <View>
      <Text style={styles.text}>HomeScreen amazing</Text>
      <Button
        onPress={() => navigation.navigate('ComponentScreen')}
        title="Go to components demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Images')}
        title="Go to components Images"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to component Counter"
      />

      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to component Color"
      />

      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to component Square"
      />

      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to component Text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
