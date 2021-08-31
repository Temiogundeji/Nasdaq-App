import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import StockList from '../components/StockList';

const ExploreScreen = ({ navigation }) => (
  <View style={Styles.container}>
    <SearchBar />
    <StockList />
  </View>
);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default ExploreScreen;
