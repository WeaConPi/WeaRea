import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { Hello } from "./containers/Hello/index";

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Hello as any} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);