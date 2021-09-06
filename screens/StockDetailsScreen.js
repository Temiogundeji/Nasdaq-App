import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StockHeaderCard from '../components/StockHeaderCard';
import StockStatistics from '../components/StockStatistics';
import AboutStock from '../components/AboutStock';
import { useAppState, useActions } from '../overmind';

const StockDetailsScreen = () => {
  const [stockDetails, setStockDetails] = useState([]);
  const state = useAppState();
  const action = useActions();

  useEffect(() => {
    action.getStockDetails();
  }, []);

  const { isLoadingStockDetails, stockDetailsData, isLoadingStockDetailsData, stockPrevData } =
    state;
  useEffect(() => {
    if (stockDetailsData) {
      setStockDetails(stockDetailsData);
    }
  }, [stockDetailsData]);

  // console.log(stockDetails.logo);
  const { description, logo } = stockDetails;

  return (
    <View style={Styles.container}>
      <StockHeaderCard logo={logo} price={stockDetails.price} />
      <StockStatistics />
      <AboutStock description={description} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'oldlace',
  },
});

export default StockDetailsScreen;
