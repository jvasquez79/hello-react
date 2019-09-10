import React from 'react';
import ReactDOM from 'react-dom';

//import Badge from './components/Badge';
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
// import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
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

/* ReactDOM.render(
  <Badge 
    firstName="Rex" 
    lastName="Vásquez" 
    jobTitle="Sleep Enthusiast" 
    twitter="rextheschnauzer" 
    avatarUrl="http://www.gravatar.com/avatar?d=identicon" 
  />, container); */

ReactDOM.render(<Badges />, container);