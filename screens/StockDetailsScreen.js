import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import StockHeaderCard from '../components/StockHeaderCard';
import StockStatistics from '../components/StockStatistics';
import AboutStock from '../components/AboutStock';
import { useAppState, useActions } from '../overmind';

const StockDetailsScreen = ({ route, navigation }) => {
  const [stockDetails, setStockDetails] = useState([]);
  const [statData, setStatData] = useState([]);

  const state = useAppState();
  const action = useActions();

  const {
    data: { ticker, name },
  } = route.params;

  useEffect(() => {
    action.getStockDetails(ticker);
  }, []);

  const { isLoadingStockDetails, stockDetailsData, stockPrevData } = state;
  const Loader = () => {
    const loaderElement = isLoadingStockDetails ? (
      <ActivityIndicator size="large" color="coral" />
    ) : null;
    return loaderElement;
  };

  useEffect(() => {
    if (stockDetailsData && stockPrevData) {
      setStockDetails(stockDetailsData);
      setStatData(stockPrevData.results);
    }
  }, [stockDetailsData, stockPrevData]);

  const stat = statData[0];
  const { description, logo, url, industry } = stockDetails;

  return (
    <View style={Styles.container}>
      <StockHeaderCard name={name} ticker={ticker} logo={logo} price={stockDetails.price} />
      <StockStatistics {...stat} />
      <AboutStock url={url} industry={industry} description={description} />
      <Loader />
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
