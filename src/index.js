// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// //import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDom from 'react-dom';
import IndexRouter from './IndexRouter.js';

ReactDom.render((
    //  var token = Auth.getToken.split(' ')[1];
      //var decoded = jwtDecode(token);
    <IndexRouter />

    ), document.getElementById('root'));