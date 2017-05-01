import { Observable } from "rxjs";
import { doIt, hosts } from "../../network";
import { BRAIN_CALCULATE_PREDICTION } from "./constants";
/**
 * Created by Farmas on 30.04.2017.
 */

export const fetchCalculationResult = (action, store) =>
  action.ofType(BRAIN_CALCULATE_PREDICTION)
    .switchMap(action =>
      Observable.ajax(
        doIt(hosts.weanen, `calculate?day=${
          action.day}&month=${action.month}&hour=${
          action.hour}&temp=${action.temperature}&houseTemp=${
         action.houseTemp}`, 'GET'))
        .switchMap(({response}) => [{
            type: `${BRAIN_CALCULATE_PREDICTION}_FULFILLED`,
            response
          }]
        ).catch(error => Observable.of({
        type: `${BRAIN_CALCULATE_PREDICTION}_REJECTED`,
        error,
      }))
    )

