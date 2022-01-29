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
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="Add Card" component={addCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
