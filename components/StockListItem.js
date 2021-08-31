import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from '@ui-kitten/components';

const StockListItem = ({ ticker, name, id, handlePress = () => {}, navigation }) => {
  return (
    <Card style={Styles.card}>
      {/* <TouchableOpacity onPress={() => handlePress(id)}> */}
      <TouchableOpacity onPress={() => navigation.navigate('StockDetailsScreen')}>
        <View style={Styles.container}>
          <Text style={Styles.ticker}>{ticker}</Text>
          <Text style={Styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ticker: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#aaaaa0',
  },
});
export default StockListItem;
