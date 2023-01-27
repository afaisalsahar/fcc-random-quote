// css reset
import 'normalize.css';

// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// state
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import quoteReducer from './features/quote';

// components
import App from './App';

const store = configureStore({
  reducer: {
    quote: quoteReducer
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