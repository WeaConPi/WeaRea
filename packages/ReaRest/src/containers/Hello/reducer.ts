import { CHANGE_TEXT } from "./constants";
/**
 * Created by Farmas on 26.04.2017.
 */
export interface IHelloReducer {
  text: string;
  count: number;
}
const initialState: IHelloReducer = {
  text: 'Initial text',
  count: 0
}
export const helloReducer = (state = initialState, action): IHelloReducer => {
  switch (action.type) {
    case CHANGE_TEXT: {
      return {
        ...state,
        text: action.text,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
}
