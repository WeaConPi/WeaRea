import * as React from "react";
import { IHour } from "../../models/Hour";
import { SensorOverview } from "../SensorOverview/index";
import { PredictionOverview } from "../PredictionOverview/index";
import { ForecastOverview } from "../ForecastOverview/index";
import styled from "styled-components";

const SensorRow = styled.div`
  display:flex;     
`;
const StyledHourDetail = styled.div`
  padding:1em;     
`;
export const HourDetail = (props: { hour: IHour }) =>
  <StyledHourDetail>
    {props.hour && <div>
      <h2>Data for {props.hour.number}. hour.</h2>
      <h5>Sensors</h5>
      {props.hour.sensors && <SensorRow>
        {props.hour.sensors.map(sensor =>
          <SensorOverview key={`${sensor.type}${sensor.sensor_name}`} sensor={sensor}/>
        )}
      </SensorRow>}
      <h5>Forecast</h5>
      {props.hour.forecast && <ForecastOverview forecast={props.hour.forecast}/>}

      <h5>Predictions</h5>
      {props.hour.prediction && <PredictionOverview prediction={props.hour.prediction}/>}
    </div>}
  </StyledHourDetail>;

