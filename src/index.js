import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';
// import './index.css';
// import { directive } from '@babel/types';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/* const element = (
  <div>
    <h1>Hola, soy Javier</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
); */

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
