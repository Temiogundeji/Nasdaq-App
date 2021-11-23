import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './navigation/routes';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './overmind';

const overmind = createOvermind(config, {
  //Use your IP address instead
  devtools: '192.168.43.227:3031',
});

if (module.hot) {
  module.hot.accept();
}

export default function App() {
  return (
    <Provider value={overmind}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
}
