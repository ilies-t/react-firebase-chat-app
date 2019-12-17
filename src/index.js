// base
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import allReducers from './reducers';
import {syncHistoryWithStore} from 'react-router-redux';

// routes
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// components
import AppComponent from './components/app.component';
import HomeContainer from './containers/home.container';

// firebase
import './firebase/index'

// style
import './assets/style/main.css';

const store = createStore(allReducers, undefined, autoRehydrate());

const history = syncHistoryWithStore(browserHistory, store);

persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppComponent} >
                <IndexRoute component={HomeContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
