import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet, SafeAreaView} from 'react-native';

// Componentes
import Button from '../components/button';
import Card from '../components/card';

export default function homeScreen({navigation}) {
  const [card, setCard] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'に',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FlashCards</Text>
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={'2'}
          data={card}
          renderItem={({item}) => <Card front={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="+ Card"
          onPress={() => navigation.navigate('Adicionar Card')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Principal
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },

  // Título
  titleContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    color: '#2F3542',
  },

  // Cards
  cardsContainer: {
    flex: 4,
    width: '100%',
  },

  // button
  buttonContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
