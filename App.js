import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
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

export default function App() {
  return (
    <Provider value={overmind}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigator />
      </ApplicationProvider>
    </Provider>
  );
}
