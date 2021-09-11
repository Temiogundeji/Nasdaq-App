import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, ActivityIndicator, FlatList } from 'react-native';
// import { List, Divider, Card, Input } from '@ui-kitten/components';
import StockListItem from '../components/StockListItem';
import { useAppState, useActions } from '../overmind';
import { Card, Searchbar } from 'react-native-paper';

const StockList = ({ navigation }) => {
  const [stocks, setStocks] = useState([]);
  const [query, setQuery] = useState('');
  const [arrayData, setArrayData] = useState([]);
  const state = useAppState();
  const action = useActions();

  const searchData = (text) => {
    const newData = arrayData.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setStocks(newData);
    setQuery(text);
  };

  useEffect(() => {
    action.getStocks();
  }, []);

  const {
    isLoadingStocks,
    stocks: { results },
  } = state;

  useEffect(() => {
    const interval = setInterval(() => {
      action.getStocks();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  console.log(results);

  useEffect(() => {
    if (results && results.length > 0) {
      setStocks(results);
      setArrayData(results);
    }
  }, [results]);

  return (
    <SafeAreaView>
      <Card style={Styles.stockHeader}>
        <Searchbar
          style={Styles.searhBoxStyle}
          placeholder="Search stocks"
          onChangeText={(query) => searchData(query)}
          value={query}
        />
      </Card>
      <FlatList
        style={Styles.container}
        data={stocks}
        // ItemSeparatorComponent={Divider}
        keyExtractor={(item, index) => item.ticker}
        initialNumToRender={5}
        onEndReachedThreshold={5}
        renderItem={({ item, index }) => (
          <StockListItem
            handlePress={() => {
              navigation.navigate('StockDetailsScreen', {
                data: item,
              });
            }}
            id={index}
            ticker={item.ticker}
            name={item.name}
          />
        )}
      />
      <Card style={Styles.footerStyle}>
        {isLoadingStocks ? (
          <ActivityIndicator size="small" color="#0066f5" />
        ) : (
          <Text style={Styles.footerText}>Explore Stocks</Text>
        )}
      </Card>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    maxHeight: 590,
    paddingRight: 10,
    paddingLeft: 9,
    paddingTop: 5,
    marginBottom: 5,
  },
  searhBoxStyle: {
    margin: 15,
    marginVertical: 30,
    color: '#c5cedc',
    position: 'relative',
    top: 20,
    borderWidth: 1,
    height: 45,
    borderColor: '#0066f5',
    borderRadius: 10,
  },
  stockHeader: {
    marginBottom: 10,
  },
  footerStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  footerText: {
    color: '#0066f5',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default StockList;
