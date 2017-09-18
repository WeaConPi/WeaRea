import * as React from 'react';
import styled from 'styled-components';
import { IForecast } from '../../models/Hour';

const StyledRow = styled.div`
display: flex;
`;
const StyledChip = styled.div`
margin: 0.5em;
`;

export const ForecastOverview = (
  props: {
    forecast: IForecast,
    loading?: boolean,
  }
) => (
  <StyledRow>
    <StyledChip className="pt-card pt-elevation-2">
      <h4 className={`${props.loading && 'pt-skeleton'}`}>Temperature</h4>
      <h3 className={`${props.loading && 'pt-skeleton'}`}>
        {props.forecast.temperature}
      </h3>
      <i className={`${props.loading && 'pt-skeleton'}`}>
        http://openweathermap.org
      </i>
    </StyledChip>
    <StyledChip className="pt-card pt-elevation-2">
      <h4 className={`${props.loading && 'pt-skeleton'}`}>Humidity</h4>
      <h3 className={`${props.loading && 'pt-skeleton'}`}>
        {props.forecast.humidity}
      </h3>
      <i className={`${props.loading && 'pt-skeleton'}`}>
        http://openweathermap.org
      </i>
    </StyledChip>
    <StyledChip className="pt-card pt-elevation-2">
      <h4 className={`${props.loading && 'pt-skeleton'}`}>Pressure</h4>
      <h3 className={`${props.loading && 'pt-skeleton'}`}>
        {props.forecast.pressure}
      </h3>
      <i className={`${props.loading && 'pt-skeleton'}`}>
        http://openweathermap.org
      </i>
    </StyledChip>
  </StyledRow>
);
