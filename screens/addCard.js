import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Context} from '../context/Provider';

// Componentes
import Button from '../components/button';

export default function addCard({navigation}) {
  const {card} = useContext(Context);
  const {setCard} = useContext(Context);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Adicionar Card</Text>
      </View>

      <View style={styles.newCardContainer}>
        <Text style={styles.inputText}>Frente</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.inputText}>Verso</Text>
        <TextInput style={styles.textInput} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Adicionar" />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Principal
  container: {
    flex: 1,
    width: '90%',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },

  // Title
  titleContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#2F3542',
  },

  //New Card Info
  newCardContainer: {
    flex: 3,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    marginBottom: 32,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#747D8C',
    color: 'white',
    fontSize: 20,
  },
  inputText: {
    color: '#2F3542',
  },

  // Buttons
  buttonContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    marginVertical: 10,
    color: '#747D8C',
    fontSize: 18,
  },
});
