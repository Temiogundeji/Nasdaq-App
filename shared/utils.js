import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (title, data) => {
  try {
    return await AsyncStorage.setItem(title, JSON.stringify(data));
  } catch (err) {
    console.log('Something went wrong.', err);
  }
};

export const getData = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('Something went wrong', err);
  }
};

export const deleteData = async (title) => {
  try {
    await AsyncStorage.removeItem(title);
  } catch (err) {
    Alert.alert('Opps!', 'Something went wrong.');
    console.log('Something went wrong', err);
  }
};

export const truncateString = (str, maxLength) => {
  let trimmedString = str.substr(0, maxLength);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
  );
  return trimmedString;
};
