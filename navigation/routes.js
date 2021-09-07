import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import ExploreScreen from '../screens/ExploreScreen';
import StockDetailsScreen from '../screens/StockDetailsScreen';
import StockList from '../components/StockList';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StockList">
        <Stack.Screen
          options={{ headerShown: false }}
          name="StockDetailsScreen"
          component={StockDetailsScreen}
        />
        <Stack.Screen options={{ headerShown: false }} name="StockList" component={StockList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
