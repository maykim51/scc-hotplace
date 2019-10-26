import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
serviceWorker.unregister();
