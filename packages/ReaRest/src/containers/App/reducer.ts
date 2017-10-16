import { APP_TOGGLE_THEME } from "./constants";
/**
 * Created by Farmas on 26.04.2017.
 */
export interface IAppReducer {
  themeStyle: string;
  customStyle: string;
}
const initialState: IAppReducer = {
  themeStyle: 'pt-card',
  customStyle: 'backgroundColor:#293742',
}
export const appReducer = (state = initialState, action): IAppReducer => {
  switch (action.type) {
    case APP_TOGGLE_THEME: {
      const theme = state.themeStyle ? '' : ' pt-card'
      const style = state.customStyle ? '' : 'backgroundColor:#293742'
      return {
        ...state,
        themeStyle: theme,
        customStyle: style,
      };
    }
    default:
      return state;
  }
}
