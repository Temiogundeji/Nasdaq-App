import { Card, Text } from 'react-native-paper';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { globalStyles } from '../shared/globalStyles';

const StockHeaderCard = ({ ticker, name, symbol }) => {
  return (
    <View style={Styles.container}>
      <Card style={Styles.card}>
        <View style={Styles.cardRow}>
          <View style={Styles.cardLeft}>
            <Text testID="ticker" style={Styles.ticker}>
              {' '}
              {ticker}
            </Text>
            <Text testID="name" style={Styles.name}>
              {' '}
              {name ? (name.length > 30 ? name.slice(0, 30) + '...' : name) : true}
            </Text>
          </View>
          <View style={Styles.cardRight}>
            <Text testID="symbol" style={Styles.symbolText}>
              {symbol}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    paddingTop: 55,
    backgroundColor: globalStyles.secondaryColor,
    height: 210,
  },
  card: {
    backgroundColor: globalStyles.primaryColor,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 20,
    borderColor: '#0066f5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  cardLeft: {
    width: '75%',
  },
  cardRight: {
    // width: '20%',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  ticker: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: globalStyles.secondaryColor,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    color: globalStyles.secondaryColor,
  },
  symbolText: {
    color: globalStyles.secondaryColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StockHeaderCard;
