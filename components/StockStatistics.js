import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Layout } from '@ui-kitten/components';

const StockStatistics = () => {
  return (
    <View style={Styles.container}>
      <Card style={Styles.card}>
        <Text style={Styles.title}>Statistics</Text>
        <View style={Styles.statRow}>
          <View>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text>142.01</Text>
          </View>
          <View>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text>142.01</Text>
          </View>
          <View>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text>142.01</Text>
          </View>
          <View>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text>142.01</Text>
          </View>
        </View>
        <View style={Styles.statRow}>
          <View>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text>142.01</Text>
          </View>
          <View>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text>142.01</Text>
          </View>
          <View>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text>142.01</Text>
          </View>
          <View>
            <Text style={Styles.titleStyle}>Open</Text>
            <Text>142.01</Text>
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
    backgroundColor: 'coral',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: 'coral',
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
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
  },
  titleStyle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
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
