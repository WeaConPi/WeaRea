import { BRAIN_MODIFY_DATA,BRAIN_CALCULATE_PREDICTION } from "./constants";
/**
 * Created by Farmas on 26.04.2017.
 */

export interface IActions {
  modifyField: (field: string, value: string) => void;
  testBrain: (month: number, day: number, hour: number, temperature: number, houseTemp: number) => void;
}

export const modifyField = (field: string, value: string) => ({
  type: BRAIN_MODIFY_DATA,
  field,
  value
})

export const testBrain = (month: number, day: number, hour: number, temperature: number, houseTemp: number) => ({
  type: BRAIN_CALCULATE_PREDICTION,
  month,
  day,
  hour,
  temperature,
  houseTemp
})
