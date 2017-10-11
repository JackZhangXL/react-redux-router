import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// import { AppContainer } from 'react-hot-loader';

import App from '../app';
import Inbox from '../index';
import About from '../about';
import Message from '../message';

// render(
//     <AppContainer>
//         <Demo />
//     </AppContainer>,
//     document.getElementById('app'),
// );
//
// if (module.hot) {
//     module.hot.accept('../originRedux', () => {
//         const newDemo = require('../originRedux').default;
//         render(
//             <AppContainer>
//                 {React.createElement(newDemo)}
//             </AppContainer>,
//             document.getElementById('app'),
//         );
//     });
// }

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app'),
);
