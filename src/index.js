import React from 'react';
import ReactDOM from 'react-dom';
import './content/css/admin-panel/index.css';
import './content/css/admin-panel/reset.css';
import './content/css/admin-panel/bootstrap.min.css';
import './content/css/admin-panel/nav.css';
import 'font-awesome/css/font-awesome.css';
import './content/css/admin-panel/custom.css';
import './content/css/admin-panel/mycustom.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
