import React from 'react';
import { DayDetailInfo } from './components/DayDetailInfo';
import { DayCharts } from './components/DayCharts';
import { ForecastOverview } from './components/ForecastOverview';
import { HourDetail } from './components/HourDetail';
import { PredictionOverview } from './components/PredictionOverview';
import { SensorOverview } from './components/SensorOverview';
export const HelloWorld = ({ hello, who }) => (
  <div>
    {hello} - {who} - jsut sayn
  </div>
);
export {
  DayDetailInfo,
  DayCharts,
  ForecastOverview,
  HourDetail,
  PredictionOverview,
  SensorOverview,
};
