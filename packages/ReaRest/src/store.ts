/**
 * Created by Farmas on 26.04.2017.
 */
import { applyMiddleware, createStore, Store } from 'redux';
import rootReducer, { RootState } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import rootEpics from './epics';

export function configureStore(initialState?: RootState): Store<RootState> {
  const create = (window as any).devToolsExtension
    ? (window as any).devToolsExtension()(createStore)
    : createStore;

  const epicMiddleware = createEpicMiddleware(rootEpics);

  const createStoreWithMiddleware = applyMiddleware(epicMiddleware as any)(
    create,
  );

  return createStoreWithMiddleware(rootReducer, initialState) as Store<
    RootState
  >;
}
