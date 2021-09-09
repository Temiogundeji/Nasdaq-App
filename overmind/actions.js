export const getStocks = async ({ state, effects }) => {
  state.isLoadingStocks = true;
  try {
    state.stocks = await effects.getStocks();
  } catch (error) {
    state.error = error;
  }
  state.isLoadingStocks = false;
};

export const getStockDetails = async ({ state, effects }, ticker) => {
  state.isLoadingStockDetailsData = true;
  try {
    state.stockDetailsData = await effects.getStockDetails(ticker);
    state.stockPrevData = await effects.getStockPrevData(ticker);
  } catch (error) {
    state.error = error;
  }
  state.isLoadingStockDetailsData = false;
};

