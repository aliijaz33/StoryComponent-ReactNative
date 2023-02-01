/* eslint-disable prettier/prettier */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false, drawerLabelStyle: { marginLeft: -25 }, tabBarInactiveTintColor: 'black' }}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};

export default AppStack;
