import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, View } from 'react-native';
import { List, Divider, Text } from '@ui-kitten/components';
import StockListItem from '../components/StockListItem';
import { useAppState, useActions, useEffects } from '../overmind';
// import SearchBar from '../components/SearchBar';

const data = new Array(19).fill({
  title: 'AAPL',
  description: 'Apple inc',
});

const renderItem = ({ item, index }) => (
  <StockListItem id={index} ticker={item.ticker} name={item.name} />
);

const StockList = () => {
  const action = useActions();
  useEffect(() => {
    action.getStocks();
  }, []);
  const state = useAppState();
  const {
    isLoadingStocks,
    stocks: { results },
  } = state;

  console.log();
  return (
    <SafeAreaView>
      <List
        style={Styles.container}
        data={results}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
      <View style={Styles.footer}>
        <ActivityIndicator size="20" color="red" />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    maxHeight: 1000,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 5,
    marginBottom: 5,
  },
  footerStyle: {
    height: 50,
    backgroundColor: 'coral',
  },
});

export default StockList;
