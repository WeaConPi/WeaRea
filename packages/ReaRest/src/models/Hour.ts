import { ISensor } from "./Sensor";
/**
 * Created by Farmas on 30.04.2017.
 */
export interface IHour {
  number: number;
  sensors: Array<ISensor>;
  prediction: IPrediction;
  forecast: IForecast;
  id: string;
  dayId: string;
}

export interface IPrediction {
  heat: number;
  windows: number;
  blinders: number;
  id: string;
}

export interface IForecast {
  temperature: number;
  pressure: number;
  humidity: number;
  id: string;
}
