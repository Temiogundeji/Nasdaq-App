import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ExploreScreen from '../screens/ExploreScreen';
import StockDetailsScreen from '../screens/StockDetailsScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExploreScreen">
        <Stack.Screen
          options={{ headerShown: false, initialRouteName: 'StockDetailsScreen' }}
          name="StockDetailsScreen"
          component={StockDetailsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ExploreScreen"
          component={ExploreScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
