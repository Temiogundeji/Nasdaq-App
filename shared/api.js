export const stockAPI = {
  //Should pass number of items to load at once as argument
  stocks: `https://proxy-cache-server.herokuapp.com/api/stocks`,
  stockDetails: (ticker) =>
    `https://proxy-cache-server.herokuapp.com/api/stocks/details?ticker=${ticker}`,
  stockPrevDay: (ticker) =>
    `https://proxy-cache-server.herokuapp.com/api/stocks/prevday_data?ticker=${ticker}`,
};

