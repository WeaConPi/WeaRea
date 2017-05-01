import * as React from "react";
import styled from "styled-components";
import { IForecast } from "../../models/Hour";
import moment = require("moment");

const StyledRow = styled.div`
display: flex;
`;
const StyledChip = styled.div`
margin: 0.5em;
`;

export const ForecastOverview = (props: {
  forecast: IForecast,
}) =>
  <StyledRow>
    <StyledChip className="pt-card pt-elevation-2">
      <h4>Temperature</h4>
      <h3>{props.forecast.temperature}</h3>
      <i>http://openweathermap.org</i>
    </StyledChip>
    <StyledChip className="pt-card pt-elevation-2">
      <h4>Humidity</h4>
      <h3>{props.forecast.humidity}</h3>
      <i>http://openweathermap.org</i>
    </StyledChip>
    <StyledChip className="pt-card pt-elevation-2">
      <h4>Pressure</h4>
      <h3>{props.forecast.pressure}</h3>
      <i>http://openweathermap.org</i>
    </StyledChip>
  </StyledRow>;
