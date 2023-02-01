/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Apps/Navigation/AuthStack';
function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>

  );
}

export default App;
