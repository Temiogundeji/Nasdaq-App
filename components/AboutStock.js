import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import * as Linking from 'expo-linking';
import { globalStyles } from '../shared/globalStyles';
import WebsiteButton from './WebsiteButton';

const AboutStock = ({ industry, description, url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={Styles.container}>
      <Card style={Styles.card}>
        <View style={Styles.aboutHeader}>
          <Text style={Styles.title}>About</Text>
          <WebsiteButton testID={'website'} handlePress={() => handlePress()} />
        </View>
        <View style={Styles.industrySection}>
          <Text style={Styles.industryHeading}>Industry</Text>
          <Text testID={'industry'} style={Styles.industryText}>
            {industry}
          </Text>
        </View>
        <View style={Styles.description}>
          <Text style={Styles.descriptionHeading}>Description</Text>
          <Text testID={'description'} style={Styles.descriptionText}>
            {description}
          </Text>
        </View>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    height: '50%',
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
    marginBottom: 1,
  },
  industryText: {
    color: globalStyles.normalTextColor,
    fontSize: globalStyles.normalFontSize,
  },
  descriptionHeading: {
    color: globalStyles.primaryColor,
    fontWeight: 'bold',
    fontSize: globalStyles.headingFontSize,
    marginBottom: 10,
  },
  descriptionText: {
    color: globalStyles.normalTextColor,
    fontSize: globalStyles.normalFontSize,
    lineHeight: 22,
  },
});

export default AboutStock;
