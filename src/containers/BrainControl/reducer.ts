import { BRAIN_MODIFY_DATA } from "./constants";
/**
 * Created by Farmas on 26.04.2017.
 */
export interface IBrainControlReducer {
  day: number;
  month: number;
  hour: number;
  temperature: number;
  houseTemp: number;
}
const initialState: IBrainControlReducer = {
  day: 0,
  month: 0,
  hour: 0,
  temperature: 0,
  houseTemp: 0
};

export const brainControlReducer = (state = initialState, action): IBrainControlReducer => {
  switch (action.type) {
    case BRAIN_MODIFY_DATA: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default:
      return state;
  }
}
