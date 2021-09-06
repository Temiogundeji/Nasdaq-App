import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card } from '@ui-kitten/components';
import * as Linking from 'expo-linking';

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
          <Text style={Styles.industryText}>{industry || 'Computer Hardware'}</Text>
        </View>
        <View style={Styles.description}>
          <Text style={Styles.descriptionHeading}>Description</Text>
          <Text style={Styles.descriptionText}>
            {description ||
              'Apple is a company founded by Steve Jobs and Steve Wozniak. Steve was the main man behind Apple. His death was pathetic.'}
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
  },
  aboutHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  about: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'coral',
    fontSize: 12,
    fontWeight: 'bold',
  },
  card: {
    // backgroundColor: 'coral',
    backgroundColor: 'coral',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'coral',
    paddingTop: 20,
    paddintBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: 350,
  },
  card: {
    backgroundColor: 'coral',
    borderRadius: 10,
    display: 'flex',
    height: 250,
    flexDirection: 'column',
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
  industrySection: {
    marginBottom: 20,
  },
  industryHeading: {
    color: '#fff',
    fontSize: 14,
  },
  industryText: {
    color: '#000',
    fontWeight: 'bold',
  },
  descriptionHeading: {
    color: '#fff',
  },
  descriptionText: {
    color: '#000',
    fontSize: 14,
  },
});

export default AboutStock;
