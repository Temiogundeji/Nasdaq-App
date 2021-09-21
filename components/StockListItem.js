import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';

const StockListItem = ({ ticker, name, handlePress = () => {} }) => {
  return (
    <Card style={Styles.card}>
      <TouchableOpacity onPress={() => handlePress()}>
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
    paddingHorizontal: 20,
  },
  ticker: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 14,
    color: '#0066f5',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#0066f5',
    marginBottom: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
export default StockListItem;
