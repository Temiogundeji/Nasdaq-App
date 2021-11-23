import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const WebsiteButton = ({ handlePress = () => {} }) => {
  return (
    <TouchableOpacity testID="websitebutton" style={Styles.button} onPress={() => handlePress()}>
      <Text style={Styles.buttonText}>Website</Text>
    </TouchableOpacity>
  );
};

export default WebsiteButton;

const Styles = StyleSheet.create({
  button: {
    borderColor: '#0066f5',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    color: '#0066f5',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
