import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import quoteReducer from './features/qutoes';
import modeReducer from './features/mode';

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    mode: modeReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);