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

//Truncate about string
export const truncateString = (str, num) => {
  let strLength = str.length;
  let slicedStr = '';
  if (strLength > num) {
    slicedStr = str.substring(0, num);
    slicedStr = slicedStr + '...';
  } else {
    slicedStr = str;
  }
  return slicedStr;
};

//fetch stocks from api from a particular number
export const STOCKS_PER_FETCH = 5;
export const fetchStocks = (startingId = 0, data) => {
  let loadedStocks = [];
  for(let i=startingId; i < startingId + STOCKS_PER_FETCH; i++){
    if(data[i] === undefined) break;
      loadedStocks.push(data[i]);
  }
  return obj;
};
