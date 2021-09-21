import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from '@lyket/react';

ReactDOM.render(
  <Provider apiKey='pt_2f597bd05cfa7833626334e770c3f2'>
    <App />
  </Provider>,
  document.getElementById('root')
);
