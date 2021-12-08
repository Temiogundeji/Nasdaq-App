import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Card } from 'react-native-paper';
import StockListItem from '../components/StockListItem';
import { useAppState, useActions } from '../overmind';
import StockListFooter from '../components/StockListFooter';
import { globalStyles } from '../shared/globalStyles';
import SearchBar from '../components/SearchBar';

const apiKey = 'MnkF9A6CCEkkkppQiVNZGMySJEc2b_yI';
const TIME_TO_REFETCH = 60000;

const ExploreScreen = ({ navigation }) => {
  const [stocks, setStocks] = useState([]);
  const [query, setQuery] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState('');

  const state = useAppState();
  const action = useActions();

  const searchData = (text) => {
    setLoading(false);
    const newData = dataArray.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setStocks(newData);
    setQuery(text);
    setLoading(false);
  };

  useEffect(() => {
    action.getStocks();
  }, []);

  const {
    isLoadingStocks,
    stocks: { results, next_url },
    moreStocks,
    isLoadingMore,
  } = state;

  useEffect(() => {
    const interval = setInterval(() => {
      action.getStocks();
    }, TIME_TO_REFETCH);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (results && results.length > 0) {
      setStocks(results);
      setDataArray(results);
      setNextPageUrl(next_url);
      setLoading(isLoadingStocks);
    }
  }, [results]);

  const loadMoreStocksData = () => {
    if (!loading) {
      setLoading(true);
      fetch(nextPageUrl + `&apiKey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const { results, next_url } = data;
          let new_next_url = next_url;
          setNextPageUrl(new_next_url);
          if (results && results.length > 0) {
            let newStock = [...stocks, ...results];
            setStocks(newStock);
            setDataArray(newStock);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <View style={Styles.screenContainer}>
      <Card style={Styles.stockHeader}>
        <SearchBar handleChangeText={(query) => searchData(query)} searchQuery={query} />
      </Card>
      <View>
        <FlatList
          style={Styles.container}
          data={stocks}
          keyExtractor={(item, index) => item.ticker}
          onEndReached={loadMoreStocksData}
          // onEndReachedSnapShot={0.5}
          // snapToInterval={Dimensions.get('window').height}
          ListFooterComponent={<StockListFooter isLoading={loading} />}
          renderItem={({ item, index }) => (
            <StockListItem
              index={index}
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
          ListEmptyComponent={() => {
            if (isLoadingStocks) {
              return (
                <ActivityIndicator
                  testID="loader"
                  size={20}
                  color={globalStyles.primaryColor}
                />
              );
            }
            return <Text testID="no-results">Sorry, no results found.</Text>;
          }}
        />
      </View>
      <Card style={Styles.footerStyle}>
        <Text style={Styles.footerText}>Explore Stocks</Text>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginBottom: 5,
    height: 650,
  },
  screenContainer: {
    height: Dimensions.get('window').height + StatusBar.currentHeight,
  },
  stockHeader: {
    marginBottom: 10,
  },
  footerStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#0066f5',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
