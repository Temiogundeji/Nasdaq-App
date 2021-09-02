export const getStocks = async ({ state, effects }) => {
  state.isLoadingStocks = true;
  state.stocks = await effects.getStocks();
  state.isLoadingStocks = false;
};
