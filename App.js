import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import homeScreen from './screens/homeScreen';
import addCard from './screens/addCard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FlashCards"
          component={homeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Adicionar Card"
          component={addCard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
