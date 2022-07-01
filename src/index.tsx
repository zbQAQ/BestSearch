import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';

import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);
