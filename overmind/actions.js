import merge from 'deepmerge';

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

export const updateStocks = async ({ state }, newStocks) => {
  state.isLoadingStocks = true;
  state.stocks = newStocks;
  state.isLoadingStocks = false;
};

export const loadMoreStocks = async ({ state, effects }, nextUrl) => {
  state.isLoadingMore = true;
  try {
    state.moreStocks = await effects.loadMoreStocks(nextUrl);
  } catch (error) {
    console.log(error);
  }
  state.isLoadingMore = false;
};

export const onInitialize = ({ state, effects }, overmind) => {
  const initialState = effects.persistedState.get();
  merge(state, initialState);
  overmind.addFlushListener(() => {
    effects.persistedState.set(state);
  });

  overmind.addFlushListener(
    debounce(() => {
      effects.persistedState.set(state);
    }, 500)
  );
};
