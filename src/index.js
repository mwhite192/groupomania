import React from 'react';
import '../src/index.scss';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './App/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';


let persistor = persistStore(store);
TimeAgo.addDefaultLocale(en);
TimeAgo.setDefaultLocale('en-US');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();

