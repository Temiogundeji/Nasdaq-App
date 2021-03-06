import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import StockHeaderCard from '../components/StockHeaderCard';
import StockStatistics from '../components/StockStatistics';
import AboutStock from '../components/AboutStock';
import { useAppState, useActions } from '../overmind';
import { globalStyles } from '../shared/globalStyles';
import { truncateString } from '../shared/utils';

const StockDetailsScreen = ({ route, navigation }) => {
  const [stockDetails, setStockDetails] = useState([]);
  const [statData, setStatData] = useState({});

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
      <ActivityIndicator size="large" color="#0066f5" />
    ) : null;
    return loaderElement;
  };

  useEffect(() => {
    if (typeof stockDetailsData !== 'undefined' && typeof stockPrevData !== 'undefined') {
      setStockDetails(stockDetailsData);
      setStatData({ ...stockPrevData.results });
    }
  }, [stockDetails, stockPrevData]);

  const stat = statData[0];
  const { description, logo, url, industry, symbol } = stockDetails;

  return (
    <View style={Styles.container}>
      <ScrollView>
        <StockHeaderCard
          name={name}
          ticker={ticker}
          logo={logo}
          symbol={symbol}
          price={stockDetails.price}
        />
        <StockStatistics {...stat} />
        <AboutStock
          url={url}
          industry={industry}
          description={
            description
              ? description.length > 100
                ? truncateString(description, 100) + '...'
                : description
              : true
          }
        />
        <Loader />
      </ScrollView>
    </View>
  );
};
//
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.secondaryColor,
    height: 500,
  },
});

export default StockDetailsScreen;