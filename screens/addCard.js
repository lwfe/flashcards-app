import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function addCard() {
  return (
    <View style={styles.container}>
      <Text>Add Card Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
