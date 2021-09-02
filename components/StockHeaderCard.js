import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const StockHeaderCard = () => {
  return (
    <View style={Styles.container}>
      <Card style={Styles.card}>
        <Text style={Styles.ticker}>APPL</Text>
        <Text style={Styles.name}>Apple Inc</Text>
        <Text style={Styles.price}>145.11</Text>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    paddingTop: 55,
    backgroundColor: 'oldlace',
  },
  card: {
    backgroundColor: 'coral',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'coral',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ticker: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 12,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default StockHeaderCard;
