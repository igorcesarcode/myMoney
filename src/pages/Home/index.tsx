import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function Home(){
  return (
    <View style={styles.container}>
    <Text>Meu app ta funcionando agora</Text>
    <StatusBar style="light" />

    <Button
      onPress={() => {alert("Ola")}}
      title="Meu teste"
      color="#2564ca"
      accessibilityLabel="Learn more about this purple button"
    />

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ce2222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});