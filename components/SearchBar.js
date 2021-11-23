import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { globalStyles } from '../shared/globalStyles';

const SearchBar = ({ handleChangeText = () => {}, searchQuery }) => {
  return (
    <Searchbar
      testID="searchbar"
      style={Styles.searhBoxStyle}
      placeholder="Search stocks"
      onChangeText={handleChangeText}
      value={searchQuery}
    />
  );
};

const Styles = StyleSheet.create({
  stockHeader: {
    marginBottom: 10,
  },
  searhBoxStyle: {
    margin: 15,
    marginVertical: 30,
    color: '#c5cedc',
    position: 'relative',
    top: 20,
    borderWidth: 1,
    height: 45,
    borderColor: globalStyles.primaryColor,
    borderRadius: 10,
  },
});

export default SearchBar;
