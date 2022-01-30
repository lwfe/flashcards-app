import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Card(props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        alert(props.back);
      }}>
      <Text style={styles.cardText}>{props.front}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#747D8C',
    width: '44%',
    height: 140,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 26,
    color: 'white',
  },
});
