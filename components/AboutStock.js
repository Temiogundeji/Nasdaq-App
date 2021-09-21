import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-paper';
import * as Linking from 'expo-linking';
import { truncateString } from '../shared/utils';
import { globalStyles } from '../shared/globalStyles';

const AboutStock = ({ industry, description, url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={Styles.container}>
      <Card style={Styles.card}>
        <View style={Styles.aboutHeader}>
          <Text style={Styles.title}>About</Text>
          <TouchableOpacity style={Styles.button} onPress={() => handlePress()}>
            <Text style={Styles.buttonText}>Website</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.industrySection}>
          <Text style={Styles.industryHeading}>Industry</Text>
          <Text style={Styles.industryText}>{industry}</Text>
        </View>
        <View style={Styles.description}>
          <Text style={Styles.descriptionHeading}>Description</Text>
          <Text style={Styles.descriptionText}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
  },
  aboutHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: globalStyles.headingFontSize,
    fontWeight: 'bold',
  },
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: '#0066f5',
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  industrySection: {
    marginBottom: 20,
  },
  industryHeading: {
    color: globalStyles.primaryColor,
    fontSize: globalStyles.headingFontSize,
    fontWeight: 'bold',
  },
  industryText: {
    color: globalStyles.normalTextColor,
    fontSize: globalStyles.normalFontSize,
  },
  descriptionHeading: {
    color: globalStyles.primaryColor,
    fontWeight: 'bold',
    fontSize: globalStyles.headingFontSize,
  },
  descriptionText: {
    color: '#c5cedc',
    fontSize: globalStyles.normalFontSize,
    lineHeight: 22,
  },
});

export default AboutStock;
