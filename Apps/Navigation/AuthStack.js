/* eslint-disable prettier/prettier */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import Stories from '../Screens/Stories';
import Store from '../Screens/Store';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Stories" component={Stories} />
        </Stack.Navigator>
    );
};

export default AuthStack;
