import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { appReducer, IAppReducer } from './containers/reducer';
import { ApolloClient, createNetworkInterface } from 'react-apollo';

export interface StoreState {
  appReducer: IAppReducer;
}
export const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:6004/graphql',
    }),
});

const reducers = combineReducers({ appReducer, apollo: client.reducer() });


export function configureStore(initialState?: StoreState): Store<StoreState> {
    const create = (window as any).devToolsExtension
        ? (window as any).devToolsExtension()(createStore)
        : createStore;


    const createStoreWithMiddleware = applyMiddleware()(create);

    return createStoreWithMiddleware(reducers, initialState) as Store<StoreState>;
}

export const store = configureStore();
