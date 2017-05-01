import { FETCH_DAY_BY_DATE, FETCH_HOURS_FOR_DAY, SELECT_HOUR } from "./constants";
import { IDay } from "../../models/Day";
import { IHour } from "../../models/Hour";
import { Map } from "immutable";
import { Moment } from "moment";
import moment = require("moment");
/**
 * Created by Farmas on 26.04.2017.
 */
export interface IDayDetailReducer {
  date: Moment;
  day: IDay;
  hours: Map<number, IHour>;
  selectedHour: number;
}
const initialState: IDayDetailReducer = {
  date: moment(),
  selectedHour: 0,
  day: {} as IDay,
  hours: Map() as Map<number, IHour>,
}
export const dayDetailReducer = (state = initialState, action): IDayDetailReducer => {
  switch (action.type) {
    case SELECT_HOUR: {
      return {...state, selectedHour: action.hour};
    }
    case FETCH_DAY_BY_DATE: {
      return {...state, date: action.date};
    }
    case `${FETCH_DAY_BY_DATE}_FULFILLED`: {
      return {...state, day: action.response as IDay};
    }
    case `${FETCH_DAY_BY_DATE}_REJECTED`: {
      return initialState;
    }
    case FETCH_HOURS_FOR_DAY: {
      return {...state};
    }
    case `${FETCH_HOURS_FOR_DAY}_FULFILLED`: {
      const mappedHours = Map(action.response.map(hour => [hour.number, hour])) as Map<number, IHour>
      return {...state, hours: mappedHours};

    }
    case `${FETCH_HOURS_FOR_DAY}_REJECTED`: {
      return initialState;
    }
    default:
      return state;
  }
}
