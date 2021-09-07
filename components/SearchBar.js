import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, Card, Text } from '@ui-kitten/components';

const SearchBar = ({ query, handleSearch = () => {} }) => {
  return (
    <Card>
      <Input
        value={query}
        onChangeText={(queryText) => handleSearch(queryText)}
        autoFocus={true}
        placeholder="Search stocks"
        style={{
          marginVertical: 15,
          position: 'relative',
          top: 20,
          borderWidth: 1,
          borderColor: 'coral',
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderRadius: 10,
        }}
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
