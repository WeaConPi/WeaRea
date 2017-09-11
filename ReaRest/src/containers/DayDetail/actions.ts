import { FETCH_DAY_BY_DATE, SELECT_HOUR } from "./constants";
import { Moment } from "moment";
/**
 * Created by Farmas on 26.04.2017.
 */

export interface IActions {
  fetchDay: (day:Moment)=>void;
  selectHour: (hour:number)=>void;
}

export const fetchDay = (date:Moment) => ({
    type: FETCH_DAY_BY_DATE,
    date
})
export const selectHour = (hour:number) => ({
    type: SELECT_HOUR,
    hour
})
