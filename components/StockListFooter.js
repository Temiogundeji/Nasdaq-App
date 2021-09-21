import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const StockListFooter = ({ isLoading }) => {
  return <View>{isLoading ? <ActivityIndicator color="#0066f5" /> : null}</View>;
};

export default StockListFooter;
