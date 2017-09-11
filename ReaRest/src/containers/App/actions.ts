import { APP_TOGGLE_THEME } from "./constants";
/**
 * Created by Farmas on 26.04.2017.
 */

export interface IActions {
    toggleTheme: ()=>void;
}

export const toggleTheme = (text:string) => ({
    type: APP_TOGGLE_THEME,
})
