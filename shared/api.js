const apiBase = `https://api.polygon.io`;
const apiKey = `MnkF9A6CCEkkkppQiVNZGMySJEc2b_yI`;
let mic = `XNAS`;

export const stockAPI = {
  stocks: `${apiBase}/v3/reference/tickers?market=stocks&exchange=${mic}&active=true&sort=ticker&order=asc&limit=10&apiKey=${apiKey}`,
};
