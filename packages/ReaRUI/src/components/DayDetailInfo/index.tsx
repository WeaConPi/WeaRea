import * as React from 'react';
import { IDay } from '../../models/Day';
import { DateInput } from '@blueprintjs/datetime';
import styled from 'styled-components';
import moment from 'moment';

const StyledDay = styled.div`
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
`;

export const DayDetailInfo = (props: {
  day: IDay;
  handleDateChange: (newDate: any) => void;
  isLoading: boolean;
}) => (
  <div>
    {props.isLoading ? (
      <div>Loading data...</div>
    ) : props.day ? (
      <div>
        <StyledDay>
          <StyledDay>
            <button
              className={`pt-button `}
              onClick={() =>
                props.handleDateChange(
                  new Date().setDate(new Date(props.day.date).getDate() - 1),
                )}
            >
              {`<`}
            </button>
            <DateInput
              value={new Date(props.day.date)}
              onChange={props.handleDateChange}
            />
            <button
              className={`pt-button `}
              onClick={() =>
                props.handleDateChange(
                  new Date().setDate(new Date(props.day.date).getDate() + 1),
                )}
            >
              {`>`}
            </button>
          </StyledDay>
          {props.day ? (
            <div>
              {props.day.note ? (
                `Note for ${moment(props.day.date).format(
                  'YYYY-MM-DD',
                )} is ${props.day.note}`
              ) : (
                `There is no note for ${moment(props.day.date).format(
                  'YYYY-MM-DD',
                )}`
              )}
            </div>
          ) : null}
        </StyledDay>
      </div>
    ) : (
      <DateInput value={new Date()} onChange={props.handleDateChange} />
    )}
  </div>
);
