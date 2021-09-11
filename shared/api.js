export const stockAPI = {
  stocks: `https://proxy-cache-server.herokuapp.com/api/stocks`,
  stockDetails: (ticker) =>
    `https://proxy-cache-server.herokuapp.com/api/stocks/details?ticker=${ticker}`,
  stockPrevDay: (ticker) =>
    `https://proxy-cache-server.herokuapp.com/api/stocks/prevday_data?ticker=${ticker}`,
};
