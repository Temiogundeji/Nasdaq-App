import { stockAPI } from '../shared/api';
export const getStocks = async () => {
  const response = await fetch(stockAPI.stocks);
  return response.json();
};


export const getStockDetails = async (ticker) => {
  const response = await fetch(stockAPI.stockDetails);
  return response.json();
};

export const getStockPrevData = async (ticker) => {
  const response = await fetch(stockAPI.stockPrevDay);
  return response.json();
};