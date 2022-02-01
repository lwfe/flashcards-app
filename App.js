import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from './context/Provider';

import homeScreen from './screens/homeScreen';
import addCardScreen from './screens/addCard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FlashCards"
            component={homeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Adicionar Card"
            component={addCardScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
