import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const StockStatistics = (props) => {
  const { o, c, v, h, l } = props;
  return (
    <View style={Styles.container}>
      <Card style={Styles.card}>
        <Text style={Styles.title}>Statistics</Text>
        <View style={Styles.statRow}>
          <View style={Styles.itemStyle}>
            <Text style={Styles.titleStyle}>Volume</Text>
            <Text style={Styles.priceStyle}>{v || 142.01}</Text>
          </View>
          <View style={Styles.itemStyle}>
            <Text style={Styles.titleStyle}>Close</Text>
            <Text style={Styles.priceStyle}>{c || 142.01}</Text>
          </View>
          <View style={Styles.itemStyle}>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text style={Styles.priceStyle}>{o || 142.01}</Text>
          </View>
        </View>
        <View style={Styles.statRow}>
          <View style={Styles.itemStyle}>
            <Text style={Styles.titleStyle}>High</Text>
            <Text style={Styles.priceStyle}>{h || 142.01}</Text>
          </View>
          <View style={Styles.itemStyle}>
            <Text style={Styles.titleStyle}>Low</Text>
            <Text style={Styles.priceStyle}>{l || 142.01}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 15,
  },
  card: {
    backgroundColor: '#0066f5',
    display: 'flex',
    flexDirection: 'column',
    padding: 25,
    paddingHorizontal: 20,
    borderColor: '#0066f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 230,
  },
  itemStyle: {
    width: '30%',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
  },
  titleStyle: {
    color: '#0a2e65',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceStyle: {
    color: '#c5cedc',
  },
  statRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: 390,
    marginBottom: 50,
  },
  colSize: {
    // marginRight: 40,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default StockStatistics;
