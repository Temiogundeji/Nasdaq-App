import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StockDetailsScreen from '../screens/StockDetailsScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExploreScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="ExploreScreen"
          component={ExploreScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="StockDetailsScreen"
          component={StockDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
