import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// Discard if it generates conflicts.
// Discard if it generates conflicts.
// Discard if it generates conflicts.

export default function ModalScreen() {
  // Discard if it generates conflicts.
  // Discard if it generates conflicts.
  // Discard if it generates conflicts.
  // Discard if it generates conflicts.
  // Discard if it generates conflicts.
  // Discard if it generates conflicts.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal. dot</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

// Discard if it generates conflicts.
// Discard if it generates conflicts.
// Discard if it generates conflicts.
// Discard if it generates conflicts.


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
