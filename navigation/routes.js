import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StockDetailsScreen from '../screens/StockDetailsScreen';
import StockList from '../components/StockList';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StockList">
        <Stack.Screen
          options={{ headerShown: false }}
          // screenOptions={{
          //   header: CustomNavigationBar,
          // }}
          // options={{
          //   title: 'Stock Details',
          //   headerStyle: {
          //     backgroundColor: '#fff',
          //   },
          //   headerTintColor: '#0066f5',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //     fontSize: 16
          //   },
          // }}
          name="StockDetailsScreen"
          component={StockDetailsScreen}
        />
        <Stack.Screen options={{ headerShown: false }} name="StockList" component={StockList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
