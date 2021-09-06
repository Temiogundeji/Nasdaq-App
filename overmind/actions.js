export const getStocks = async ({ state, effects }) => {
  state.isLoadingStocks = true;
  state.stocks = await effects.getStocks();
  state.isLoadingStocks = false;
};

export const getStockDetails = async ({ state, effects }) => {
  state.isLoadingStockDetailsData = true;
  state.stockDetailsData = await effects.getStockDetails();
  state.stockPrevData = await effects.getStockPrevData();
  state.isLoadingStockDetailsData = false;
};

// export const getStockPrevData = async ({ state, effects }) => {
//   state.isLoadingStockPrevData = true;
//   state.stockPrevData = await effects.getStockPrevData();
//   state.isLoadingStockPrevData = false;
// };