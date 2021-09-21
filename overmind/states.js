import { derived } from 'overmind';
export const state = {
  stocks: [],
  isLoadingStocks: false,
  next_url: derived((state) => state.stocks.next_url),
};
