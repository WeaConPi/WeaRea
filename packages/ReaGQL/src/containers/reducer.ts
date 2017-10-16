import { ToggleTheme } from './actions';
import { SELECT_DAY, TOGGLE_THEME } from './constants';
import { Moment } from 'moment';
import * as moment from 'moment';

export interface IAppReducer {
  themeStyle: string;
  customStyle: string;
  activeDay: Moment;
}
const initialState: IAppReducer = {
  themeStyle: 'pt-card',
  customStyle: 'backgroundColor:#293742',
  activeDay: moment(),
};
export const appReducer = (
  state: IAppReducer = initialState,
  action: ToggleTheme,
): IAppReducer => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const theme = state.themeStyle ? '' : 'pt-card';
      const style = state.customStyle ? '' : 'backgroundColor:#293742';
      return {
        ...state,
        themeStyle: theme,
        customStyle: style,
      };
    }
    case SELECT_DAY: {
      return {
        ...state,
        activeDay: moment(action.day),
      };
    }
  }
  return state;
};
