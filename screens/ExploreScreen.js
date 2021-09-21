import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
  FlatList,
  StatusBar,
  Dimensions,
} from 'react-native';
import StockListItem from '../components/StockListItem';
import { useAppState, useActions } from '../overmind';
import { Card, Searchbar } from 'react-native-paper';
import StockListFooter from '../components/StockListFooter';
import { globalStyles } from '../shared/globalStyles';

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
  };

  useEffect(() => {
    action.getStocks();
  }, []);

  const {
    isLoadingStocks,
    stocks: { results, next_url },
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
    }
  }, [results]);

  const loadMoreData = () => {
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
    <SafeAreaView style={Styles.screenContainer}>
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
        keyExtractor={(item, index) => item.ticker}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.6}
        snapToInterval={Dimensions.get('window').height}
        ListFooterComponent={<StockListFooter isLoading={loading} />}
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
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginBottom: 5,
    height: 620,
  },
  searhBoxStyle: {
    margin: 15,
    marginVertical: 30,
    color: '#c5cedc',
    position: 'relative',
    top: 20,
    borderWidth: 1,
    height: 45,
    borderColor: globalStyles.primaryColor,
    borderRadius: 10,
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
    alignItems: 'center',
  },
  footerText: {
    color: '#0066f5',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
