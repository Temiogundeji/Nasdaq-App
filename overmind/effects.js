import { stockAPI } from '../shared/api';
export const getStocks = async () => {
  const response = await fetch(stockAPI.stocks);
  return response.json();
};
