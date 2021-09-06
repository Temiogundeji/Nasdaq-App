const apiBase = `https://api.polygon.io`;
const apiKey = `MnkF9A6CCEkkkppQiVNZGMySJEc2b_yI`;
let mic = `XNAS`;

export const stockAPI = {
  stocks: `${apiBase}/v3/reference/tickers?market=stocks&exchange=${mic}&active=true&sort=ticker&order=asc&limit=10&apiKey=${apiKey}`,
  // stockDetails: (ticker) => `${apiBase}/v1/meta/symbols/${ticker}/company?&apiKey=${apiKey}`,
  stockDetails:
    'https://api.polygon.io/v1/meta/symbols/AAPL/company?&apiKey=MnkF9A6CCEkkkppQiVNZGMySJEc2b_yI',
  stockPrevDay:
    'https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=MnkF9A6CCEkkkppQiVNZGMySJEc2b_yI',
  // stockPrevDay: (ticker) =>
  //   `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${apiKey}`,
};
