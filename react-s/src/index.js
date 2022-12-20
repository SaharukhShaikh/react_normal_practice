import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './Services/reducers/index';

const store= createStore(rootReducer)
console.warn("store data",store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
