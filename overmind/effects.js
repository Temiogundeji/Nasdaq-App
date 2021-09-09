import { stockAPI } from '../shared/api';
import { storeData, getData } from '../shared/utils';

export const getStocks = async () => {
  const response = await fetch(stockAPI.stocks);
  return response.json();
};

export const getStockDetails = async (ticker) => {
  const response = await fetch(stockAPI.stockDetails(ticker));
  return response.json();
};

export const getStockPrevData = async (ticker) => {
  const response = await fetch(stockAPI.stockPrevDay(ticker));
  return response.json();
};
