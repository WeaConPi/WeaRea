import { BuildingID, FETCH_DAY_BY_DATE, FETCH_HOURS_FOR_DAY } from "./constants";
import { Observable } from "rxjs";
import { doIt, hosts } from "../../network";
/**
 * Created by Farmas on 30.04.2017.
 */

export const fetchDataEpic = (action, store) =>
  action.ofType(FETCH_DAY_BY_DATE)
    .switchMap(action =>
      Observable.ajax(
        doIt(hosts.weaper, `api/days/findOne?filter=${`{"date":"${
          action.date.format("YYYY-MM-DD")}T00:00:00.000Z", "buildingId":"${
          BuildingID}"}`}`, 'GET'))
        .switchMap(({response}) => [{
            type: `${FETCH_DAY_BY_DATE}_FULFILLED`,
            response
          }, {
            type: FETCH_HOURS_FOR_DAY,
            dayId: response.id,
          }]
        ).catch(error => Observable.of({
        type: `${FETCH_DAY_BY_DATE}_REJECTED`,
        error,
      }))
    )

export const fetchHoursForDayEpic = (action, store) =>
  action.ofType(FETCH_HOURS_FOR_DAY)
    .filter(action => action.dayId)
    .switchMap(action =>
      Observable.ajax(
        doIt(hosts.weaper, `api/hours?filter={"dayId":"${action.dayId}"}`, 'GET'))
        .map(({response}) => ({
            type: `${FETCH_HOURS_FOR_DAY}_FULFILLED`,
            response
          })
        ).catch(error => Observable.of({
        type: `${FETCH_HOURS_FOR_DAY}_REJECTED`,
        error,
      }))
    );

export default [fetchDataEpic, fetchHoursForDayEpic]
