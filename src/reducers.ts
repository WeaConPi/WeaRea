/**
 * Created by Farmas on 26.04.2017.
 */
import { combineReducers } from "redux";
import { helloReducer, IHelloReducer } from "./containers/Hello/reducer";
import { appReducer, IAppReducer } from "./containers/App/reducer";
import { dayDetailReducer, IDayDetailReducer } from "./containers/DayDetail/reducer";
import { brainControlReducer, IBrainControlReducer } from "./containers/BrainControl/reducer";

export interface RootState {
  helloReducer: IHelloReducer;
  appReducer: IAppReducer;
  dayDetailReducer: IDayDetailReducer;
  brainControlReducer: IBrainControlReducer;
}

export default combineReducers<RootState>({
  helloReducer,
  appReducer,
  dayDetailReducer,
  brainControlReducer,
});
