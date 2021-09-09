import React from 'react';
import * as eva from '@eva-design/eva';
// import { ApplicationProvider } from '@ui-kitten/components';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigator from './navigation/routes';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './overmind';

const overmind = createOvermind(config, {
  devtools: '192.168.43.248:3031',
});

if (module.hot) {
  module.hot.accept();
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <Provider value={overmind}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
}
