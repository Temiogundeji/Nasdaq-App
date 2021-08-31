import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, Divider } from '@ui-kitten/components';
import StockListItem from '../components/StockListItem';

const data = new Array(8).fill({
  title: 'AAPL',
  description: 'Apple inc',
});

const StockList = ({ stocks }) => {
  const renderItem = ({ item, index }) => (
    <StockListItem id={index} ticker={item.title} name={item.description} />
  );
  return (
    <ScrollView>
      <View>
        <List
          style={Styles.container}
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    maxHeight: 700,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 5,
    marginBottom: 5,
  },
});

export default StockList;
