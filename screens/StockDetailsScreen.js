import React from 'react';
import { View, StyleSheet } from 'react-native';
import StockHeaderCard from '../components/StockHeaderCard';
import StockStatistics from '../components/StockStatistics';
import AboutStock from '../components/AboutStock';
const StockDetailsScreen = () => (
  <View style={Styles.container}>
    <StockHeaderCard />
    <StockStatistics />
    <AboutStock />
  </View>
);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'oldlace',
  },
});

export default StockDetailsScreen;
