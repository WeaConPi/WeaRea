/**
 * Created by Farmas on 30.04.2017.
 */
import { combineEpics } from "redux-observable";
import { fetchDataEpic, fetchHoursForDayEpic } from "./containers/DayDetail/epics";
import { fetchCalculationResult } from "./containers/BrainControl/epics";
export default combineEpics(
  fetchDataEpic,
  fetchHoursForDayEpic,
  fetchCalculationResult,
)
