/**
 * Created by Farmas on 26.04.2017.
 */
import { applyMiddleware, createStore, Store } from "redux";
import rootReducer, { RootState } from "./reducers";

export function configureStore(initialState?: RootState): Store<RootState> {
    const create = (window as any).devToolsExtension
        ? (window as any).devToolsExtension()(createStore)
        : createStore;

    const createStoreWithMiddleware = applyMiddleware()(create);

    const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>;

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}