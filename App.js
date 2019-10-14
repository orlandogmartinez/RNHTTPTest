import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './src/components/TestComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <TestComponent></TestComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
