import * as constants from './constants';
import { Moment } from 'moment';
export interface IActions {
  toggleTheme: () => void;
  selectDay: (date: Moment) => void;
}
export interface ToggleTheme {
  type: constants.TOGGLE_THEME;
}
export interface SelectDay {
  type: constants.SELECT_DAY;
  day?: Moment;
}

export type appActions = ToggleTheme|SelectDay;

export const toggleTheme = (): ToggleTheme => ({
  type: constants.TOGGLE_THEME,
});
export const selectDay = (day: Moment): SelectDay => ({
  type: constants.SELECT_DAY,
  day,
});
