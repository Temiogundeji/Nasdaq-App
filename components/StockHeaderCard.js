import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const StockHeaderCard = ({ ticker, name, price, logo, symbol }) => {
  return (
    <View style={Styles.container}>
      <Card style={Styles.card}>
        <View style={Styles.cardRow}>
          <View style={Styles.cardLeft}>
            <Text style={Styles.ticker}> {ticker || 'APPL'}</Text>
            <Text style={Styles.name}>{name || 'Apple Inc'}</Text>
            <Text style={Styles.price}>
              <Text style={{ fontSize: 25 }}>{'\u0024'}</Text> {price || 145.11}
            </Text>
          </View>
          <Image style={Styles.tinyLogo} source={{ uri: logo ? logo : symbol }} />
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
    backgroundColor: 'oldlace',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'coral',
    borderRadius: 10,
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
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    width: '70%',
  },
  tinyLogo: {
    width: 50,
    height: 50,
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
