import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect, IndexRedirect } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import Dashboard from '../dashboard';
import App from '../app';
import Demo from '../demo';
import About from '../about';
import Message from '../message';

const routeConfig = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Dashboard },
        childRoutes: [
            { path: 'about', component: About },
            { path: 'demo',
                component: Demo,
                childRoutes: [
                    { path: 'messages/:id', component: Message },
                    { path: '/messages/:id',
                        onEnter: (nextState, replaceState) => {
                            console.log(nextState);
                            console.log(replaceState);
                            console.log(`messages/${nextState.params.id}`);
                            replaceState(null, `messages/${nextState.params.id}`);
                        },
                    },
                ],
            },
        ],
    },
];

render(
    <AppContainer>
        <Router routes={routeConfig} history={browserHistory} />
    </AppContainer>,
    document.getElementById('app'),
);

// // Redirect /messages/1234 to /demo/messages/1234
// render(
//     <AppContainer>
//         <Router history={browserHistory}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Dashboard} />
//                 <Route path="about" component={About} />
//                 <Route path="demo" component={Demo}>
//                     <Route path="messages/:id" component={Message} />
//                     <Redirect from="/messages/:id" to="messages/:id" />
//                 </Route>
//             </Route>
//         </Router>
//     </AppContainer>,
//     document.getElementById('app'),
// );

/*
if (module.hot) {
    module.hot.accept('../app', () => {
        const newApp = require('../app').default;
        const newAbout = require('../about').default;
        const newDemo = require('../demo').default;
        const newMessage = require('../message').default;
        render(
            <AppContainer>
                <Router history={browserHistory}>
                    <Route path="/" component={newApp}>
                        <Route path="about" component={newAbout} />
                        <Route path="demo" component={newDemo}>
                            <Route path="messages/:id" component={newMessage} />
                        </Route>
                    </Route>
                </Router>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
*/
