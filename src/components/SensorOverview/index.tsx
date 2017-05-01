import * as React from "react";
import styled from "styled-components";
import { ISensor } from "../../models/Sensor";

const StyledSensor = styled.div`
  margin: 0.5em;
`;

export const SensorOverview = (props: {
  sensor: ISensor,
}) =>
  <StyledSensor className="pt-card pt-elevation-2">
    <h4>{props.sensor.type}</h4>
    <h3>{Math.round(props.sensor.value*100)/100} {props.sensor.unit_display}</h3>
    <h5>{props.sensor.sensor_name} - {props.sensor.sensor_type}</h5>
  </StyledSensor>;
