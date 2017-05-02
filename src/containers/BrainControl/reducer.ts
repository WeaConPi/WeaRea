import { BRAIN_CALCULATE_PREDICTION, BRAIN_MODIFY_DATA } from "./constants";
import { IPrediction } from "../../models/Hour";
/**
 * Created by Farmas on 26.04.2017.
 */
export interface IBrainControlReducer {
  day: number;
  month: number;
  hour: number;
  temperature: number;
  houseTemp: number;
  prediction:IPrediction;
  loading:boolean;
}
const initialState: IBrainControlReducer = {
  day: 0,
  month: 0,
  hour: 0,
  temperature: 0,
  houseTemp: 0,
  prediction: {} as IPrediction,
  loading: false,
};

export const brainControlReducer = (state = initialState, action): IBrainControlReducer => {
  switch (action.type) {
    case BRAIN_MODIFY_DATA: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case `${BRAIN_CALCULATE_PREDICTION}`: {
      return {
        ...state,
        loading:true,
      };
    }
    case `${BRAIN_CALCULATE_PREDICTION}_FULFILLED`: {
      const prediction = action.response as IPrediction;
      return {
        ...state,
        prediction,
        loading:false,
      };
    }
    case `${BRAIN_CALCULATE_PREDICTION}_REJECTED`: {
      return {
        ...state,
        prediction:{} as IPrediction,
        loading:false,
      };
    }
    default:
      return state;
  }
}
