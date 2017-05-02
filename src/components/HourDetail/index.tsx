import * as React from 'react';
import { IHour } from '../../models/Hour';
import { SensorOverview } from '../SensorOverview/index';
import { PredictionOverview } from '../PredictionOverview/index';
import { ForecastOverview } from '../ForecastOverview/index';
import styled from 'styled-components';

const SensorRow = styled.div`
  display:flex;     
`;
const StyledHourDetail = styled.div`
  padding:1em;     
`;
export const HourDetail = (props: { hour: IHour, loading?: boolean }) => (
  <StyledHourDetail>
    {props.hour &&
      <div>
        <h2 className={`${props.loading && 'pt-skeleton'}`}>
          Data for {props.hour.number}. hour.
        </h2>
        <h5 className={`${props.loading && 'pt-skeleton'}`}>Sensors</h5>
        {props.hour.sensors &&
          <SensorRow>
            {props.hour.sensors.map(sensor => (
              <SensorOverview
                loading={props.loading}
                key={`${sensor.type}${sensor.sensor_name}`}
                sensor={sensor}
              />
            ))}
          </SensorRow>}
        <h5 className={`${props.loading && 'pt-skeleton'}`}>Forecast</h5>
        {props.hour.forecast &&
          <ForecastOverview
            loading={props.loading}
            forecast={props.hour.forecast}
          />}

        <h5 className={`${props.loading && 'pt-skeleton'}`}>Predictions</h5>
        {props.hour.prediction &&
          <PredictionOverview
            loading={props.loading}
            prediction={props.hour.prediction}
          />}
      </div>}
  </StyledHourDetail>
);
