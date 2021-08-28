import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginScreen from './screens/loginScreen';
import registerScreen from './screens/registerScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen options={{ headerShown: false }} name="loginScreen" component={loginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="homeScreen" component={homeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
