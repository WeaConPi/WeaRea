import { CHANGE_TEXT } from "./constants";
/**
 * Created by Farmas on 26.04.2017.
 */

export interface IActions {
    sayHello: (hello:string)=>void;
}

export const sayHello = (text:string) => ({
    type: CHANGE_TEXT,
    text
})