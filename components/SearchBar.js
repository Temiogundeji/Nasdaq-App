import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, Card, Text } from '@ui-kitten/components';

const SearchBar = ({ handleSearch = () => {}, queryText }) => {
  //Todo: Add Search Icon to Form
  return (
    <Card style={Styles.container}>
      <Text style={Styles.title}>Explore Stock</Text>
      <Input
        clearButtonMode="always"
        style={Styles.input}
        onChangeText={() => handleSearch(queryText)}
        placeholder="Search"
        value={queryText}
        autoCorrect={false}
      />
    </Card>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 140,
    position: 'relative',
    padding: 5,
  },
  title: {
    color: '#aaaaa0',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 5,
  },
  input: {
    borderRadius: 12,
  },
});

export default SearchBar;
