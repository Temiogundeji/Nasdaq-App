import { derived } from 'overmind';
export const state = {
  stocks: [],
  isLoadingStocks: false,
  nextPage: derived((state) => state.stocks.next_url),
  moreStocks: [],
};
