/**
 * Created by Farmas on 26.04.2017.
 */
import { combineReducers, Reducer } from 'redux';
import { helloReducer, IHelloReducer } from "./containers/Hello/reducer";

export interface RootState {
    helloReducer: IHelloReducer;
}

export default combineReducers<RootState>({
    helloReducer
});