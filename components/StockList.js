import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from 'react-native';
import { List, Divider, Card, Input } from '@ui-kitten/components';
import StockListItem from '../components/StockListItem';
import { useAppState, useActions } from '../overmind';

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

  // const handlePress = (item) => {
  //   navigation.navigate('StockDetailsScreen', { data: item });
  // };

  useEffect(() => {
    action.getStocks();
  }, []);

  const {
    isLoadingStocks,
    stocks: { results },
  } = state;

  useEffect(() => {
    if (results && results.length > 0) {
      setStocks(results);
      setArrayData(results);
    }
  }, [results]);

  const SearchBar = () => {
    return (
      <Card>
        <Input
          value={query}
          onChangeText={(queryText) => searchData(queryText)}
          autoFocus={false}
          placeholder="Search stocks"
          style={Styles.searhBoxStyle}
        />
      </Card>
    );
  };

  return (
    <SafeAreaView>
      <SearchBar />
      <List
        style={Styles.container}
        data={stocks}
        ItemSeparatorComponent={Divider}
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
      <View style={Styles.footer}>
        {isLoadingStocks ? <ActivityIndicator size="large" color="coral" /> : null}
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
  searhBoxStyle: {
    // marginHorizontal: 2,
    marginVertical: 15,
    position: 'relative',
    top: 20,
    borderWidth: 1,
    borderColor: 'coral',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  footerStyle: {
    height: 50,
    backgroundColor: 'coral',
  },
});

export default StockList;
