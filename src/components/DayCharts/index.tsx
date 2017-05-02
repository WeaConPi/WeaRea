import * as React from 'react';
import { IHour } from '../../models/Hour';
import { Map } from 'immutable';
import { Tooltip, LineChart, XAxis, YAxis, Legend, Line } from 'recharts';
import styled from 'styled-components';

const mapToChartData = (hours: Map<number, IHour>) => {
  let data = [];
  hours.toIndexedSeq().forEach(hour => {
    if (hour.forecast && hour.sensors[0] && hour.prediction) {
      const hourForGraph = {
        name: hour.number,
        temperature: hour.sensors[0].value,
        forecast: hour.forecast.temperature,
        heat: hour.prediction.heat,
      };
      data.push(hourForGraph);
    }
  });
  return data;
};
const StyledCharts = styled.div`
  position:absolute;
`;
const StyledOneChart: any = styled.div`
  position:absolute;
  top:${(props: any) => props.top}px
  left:${(props: any) => props.left || '0'}px
  right:${(props: any) => props.right || '0'}px
`;
export const DayCharts = (
  props: {
    hours: Map<number, IHour>,
  }
) => (
  <StyledCharts>
    <StyledOneChart right={60}>
      <LineChart width={730} height={250} data={mapToChartData(props.hours)}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend align="left" />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="forecast" stroke="#82ca9d" />
      </LineChart>
    </StyledOneChart>
    <StyledOneChart top={50} left={60}>
      <LineChart width={730} height={200} data={mapToChartData(props.hours)}>
        <XAxis dataKey="name" />
        <YAxis orientation="right" />
        <Tooltip />
        <Legend align="right" />
        <Line type="monotone" dataKey="heat" stroke="red" />
      </LineChart>
    </StyledOneChart>
  </StyledCharts>
);
