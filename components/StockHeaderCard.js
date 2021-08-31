import { Card } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const StockHeaderCard = () => {
  return (
    <View style={Styles.container}>
      <Card>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default StockHeaderCard;
