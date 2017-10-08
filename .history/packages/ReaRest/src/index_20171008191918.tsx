import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { App } from "./containers/App/index";

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
    <div>Dammig </div>
,
    document.getElementById('root')
);
