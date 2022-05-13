
## Nasdaq Mobile/Web App

The app is a stock market app. It should show all stocks listed in Nasdaq exchange with their ticker, name, and details.

### Features:

**Screen: Explore Screen:**

- Stock List: It shows all the list of stocks listed on the Nasdaq stock exchange.

- Search Feature: It enables the user to be able to easily search for stocks.

- Load more on scroll: It enables the user to be able to load more data while scrolling towards the end of the page.

**Screen: Stock Details Screen:**

- It displays the statistics of the selected stock e.g. close, open, high, low and volume for the previous day.
- It also displays the details of the stock such as information about the company and the website should user want to learn more about the company.


### Technologies used

- **React Native (Expo):**
This was used in building the client side of the application. 

- **React Native Paper:**
A UI Libarary for React Native was used in creation of the User Interface.

- **NodeJS:**
This was used in building the proxy cache server which helps in caching the response from the [Polygon API](polygon.io/). To avoid fetching the same response twice within a minute.

- **Redis:**
It was used in caching responses from [Polygon API](polygon.io/).

- **Heroku:**
This was used in hosting the [proxy cache server](https://proxy-cache-server.herokuapp.com) that was built using NodeJS.

**Find the repo for the proxy cache server [here](https://github.com/Temiogundeji/proxy-cache-server): **



### How to run  this project

- Clone this repository using the following command:

``
git clone https://github.com/Temiogundeji/Nasdaq-App.git
``
- Install all dependencies using the following command:

``
npm install
``

- Run the application using the following command:

``
expo start
``

Thank you



